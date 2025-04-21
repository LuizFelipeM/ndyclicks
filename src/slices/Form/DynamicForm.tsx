"use client";
import React from "react";
import { Form } from "@/components/Form";
import { Card } from "@/components/Card";
import { Field } from "@/components/Form/Field";
import { FormikValues } from "formik";
import { DynamicFormUtils } from "./DynamicForm.utils";

interface DynamicFormProps {
  channel: "email" | "sms";
  fields: Field[];
}

export const DynamicForm = ({
  channel,
  fields: initialFields,
}: DynamicFormProps) => {
  const { initialValues, schema, fields } =
    DynamicFormUtils.processFields(initialFields);

  const handleSubmit = async (values: FormikValues) => {
    try {
      await fetch(`/api/contact/${channel}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: Object.entries(values).map(([title, value]) => ({
            title,
            value,
          })),
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="m-auto max-w-[80vw] w-2 lg:max-w-[50vw]">
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {fields.map((field, index) => (
          <Form.Field
            key={index}
            name={field.id}
            type={field.type}
            label={field.title}
            className="bg-transparent border-b-2 border-white text-white caret-white focus:outline-none focus:ring-0"
          />
        ))}
        <Form.Button className="btn inline-flex items-center">
          Enviar
        </Form.Button>
      </Form>
    </Card>
  );
};
