import { isFilled, NumberField } from "@prismicio/client";

export const getValueOrDefault = (field: NumberField): number | undefined =>
  isFilled.number(field) ? field : undefined