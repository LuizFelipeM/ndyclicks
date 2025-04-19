"use client";
import React, { useState } from "react";
import { Field } from "./Field";
import { FieldType } from "./FieldType";
import { DynamicFormField } from "./DynamicFormField";
import { emailRegex } from "@/utils/regex";
import { Card } from "../Card";

type DynamicFormProps = {
  channel: "email" | "sms";
  fields: Field[];
};

const DynamicForm: React.FC<DynamicFormProps> = ({ channel, fields }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});

  const validateField = (
    title: string,
    value: string,
    type: FieldType
  ): string | undefined => {
    if (
      fields.find((field) => field.title === title)?.required &&
      (!value || value.trim() === "")
    )
      return "Este campo é obrigatório";
    if (type === "email" && !emailRegex.test(value))
      return "Endereço de e-mail inválido";
    if (type === "tel" && !/^\+?[1-9]\d{1,14}$/.test(value))
      return "Número de telefone inválido";
    if (type === "number" && isNaN(Number(value))) return "Número inválido";

    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    title: string,
    type: FieldType
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [title]: value }));
    const error = validateField(title, value, type);
    setErrors((prev) => ({ ...prev, [title]: error }));
  };

  const handleSubmit = async (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const newErrors: Record<string, string | undefined> = {};

      fields.forEach((field) => {
        const error = validateField(
          field.title,
          formData[field.title],
          field.type
        );

        if (error) newErrors[field.title] = error;
      });

      const emailField = fields.find((v) => v.type === "email");
      if (Object.keys(newErrors).length === 0 && emailField) {
        await fetch(`/api/contact/${channel}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: Object.entries(formData).map(([title, value]) => ({
              title,
              value,
            })),
          }),
        });
      } else {
        setErrors(newErrors);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="m-auto max-w-[90vw] lg:max-w-[50vw]">
      <form className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label className="mb-2 font-semibold">{field.title}</label>

            <DynamicFormField
              field={field}
              onChange={handleChange}
              className={errors[field.title] && "border-error"}
            />

            {errors[field.title] && (
              <span className="text-error text-sm mt-1">
                {errors[field.title]}
              </span>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center bg-secondary-olive-dark text-neutral-white-smoke rounded-full px-4 h-10"
        >
          Enviar
        </button>
      </form>
    </Card>
  );
};

export default DynamicForm;
