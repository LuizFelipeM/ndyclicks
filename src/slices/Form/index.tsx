import DynamicForm from "@/components/DynamicForm/DynamicForm";
import { FieldType } from '@/components/DynamicForm/FieldType';
import { Field } from '@/components/DynamicForm/Field';
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

type ContentFieldType =
  | "Texto curto"
  | "Texto longo (múltiplas linhas)"
  | "Número"
  | "E-mail"
  | "Data"
  | "Número de Telefone"

const convertToFieldType = (type: ContentFieldType): FieldType => {
  switch (type) {
    case "Texto longo (múltiplas linhas)":
      return "textarea"
    case "E-mail":
      return "email"
    case "Número":
      return "number"
    case "Data":
      return "date"
    case "Número de Telefone":
      return "tel"
    case "Texto curto":
    default:
      return "text"
  }
}

/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;

/**
 * Component for "Form" Slices.
 */
const Form = ({ slice }: FormProps): JSX.Element => {
  const convertToFormField = (fields: Content.FormSlice["primary"]["fields"]): Field[] =>
    fields
      .filter(({ title, type }) => isFilled.keyText(title) && isFilled.select(type))
      .map(({ title, type, required }) => ({
        title: title!,
        type: convertToFieldType(type!),
        required
      }))

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-8"
    >
      {isFilled.group(slice.primary.fields) &&
        <DynamicForm
          fields={convertToFormField(slice.primary.fields)}
        />}
    </section>
  );
};

export default Form;
