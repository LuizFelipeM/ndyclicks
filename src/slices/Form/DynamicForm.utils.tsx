"use client";
import { Field } from "@/components/Form/Field";
import { FieldType } from "@/components/Form/FieldType";
import { FormikValues } from "formik";
import * as yup from "yup";
import { v4 as uuid } from "uuid";

const getTypeSchemaValidation = (
  type: FieldType,
  required: boolean
): yup.Schema => {
  let schema: yup.Schema;

  const addRequired = (schema: yup.Schema) => {
    if (required) {
      if (schema instanceof yup.StringSchema) {
        schema = schema.min(1, "O campo não pode ser vazio");
      }

      return schema.required("Campo obrigatório");
    }

    return schema;
  };

  switch (type) {
    case "text":
      schema = addRequired(yup.string());
      break;
    case "email":
      schema = addRequired(yup.string().email("E-mail inválido"));
      break;
    case "textarea":
      schema = addRequired(yup.string());
      break;
    case "number":
      schema = addRequired(yup.number());
      break;
    case "tel":
      schema = addRequired(
        yup.string().matches(/^\d{11}$/, "Telefone inválido")
      );
      break;
    case "date":
      schema = addRequired(yup.date());
      break;
    default:
      schema = addRequired(yup.string());
      break;
  }

  return schema;
};

export class DynamicFormUtils {
  static processFields(initialFields: Field[]): {
    initialValues: FormikValues;
    schema: yup.ObjectSchema<yup.Maybe<FormikValues>>;
    fields: { id: string; title: string; type: FieldType }[];
  } {
    const schemaObject: Record<string, yup.Schema> = {};
    const fields: { id: string; title: string; type: FieldType }[] = [];
    const initialValues: FormikValues = {};

    for (const field of initialFields) {
      const id = uuid();
      schemaObject[id] = getTypeSchemaValidation(field.type, field.required);
      initialValues[id] = "";
      fields.push({ id, title: field.title, type: field.type });
    }

    return {
      schema: yup.object(schemaObject),
      initialValues,
      fields,
    };
  }
}
