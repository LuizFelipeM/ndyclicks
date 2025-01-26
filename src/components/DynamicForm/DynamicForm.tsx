"use client";
import React, { useState } from "react";
import { Field } from "./Field";
import { FieldType } from "./FieldType";
import { DynamicFormField } from "./DynamicFormField";
import { emailRegex } from "@/utils/regex";

type DynamicFormProps = {
  fields: Field[];
};

const DynamicForm: React.FC<DynamicFormProps> = ({ fields }) => {
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

  const handleSubmit = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newErrors: Record<string, string | undefined> = {};

    fields.forEach((field) => {
      const error = validateField(
        field.title,
        formData[field.title],
        field.type
      );
      newErrors[field.title] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('formData', formData)
      const emailField = fields.find((v) => v.type === "email");
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: "Test",
          email: emailField && formData[emailField.title],
          message: Object.entries(formData).reduce(
            (message, [title, value]) => message + `\n${title}: ${value}`,
            ""
          ),
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log("data", data))
        .catch((error) => console.error(error));
    } else {
      setErrors(newErrors);
    }
  };

  return (
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
  );
};

export default DynamicForm;
