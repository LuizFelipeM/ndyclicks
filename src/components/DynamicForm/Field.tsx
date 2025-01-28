import { FieldType } from "./FieldType";

export type Field = {
  title: string;
  type: FieldType;
  required: boolean;
};
