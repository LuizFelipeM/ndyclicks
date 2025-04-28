import React from "react";
import { FieldType } from "./FieldType";
import clsx from "clsx";
import * as yup from "yup";
import {
  Formik,
  FormikValues,
  Form as FormikForm,
  Field as FormikField,
  FieldProps as FormikFieldProps,
} from "formik";

interface FieldProps {
  name: string;
  type: FieldType;
  label?: string;
  className?: string;
}

const Field: React.FC<FieldProps> = ({ name, type, className, label }) => {
  const defaultInputType: FieldType[] = [
    "email",
    "text",
    "password",
    "date",
    "number",
    "tel",
  ];

  return (
    <FormikField name={name}>
      {({ field, meta }: FormikFieldProps) => {
        const isLabelVisible =
          meta.value ||
          (meta.touched && meta.value && meta.value !== meta.initialValue);

        return (
          <div className="relative text-left text-paragraph flex flex-col mt-6 pb-2">
            <label
              className="absolute top-0 left-0 text-white transform-gpu transition-all duration-200"
              style={{
                transform: isLabelVisible
                  ? "translateY(-1rem)"
                  : "translateY(0)",
                fontSize: isLabelVisible ? "1rem" : undefined,
              }}
            >
              {label}
            </label>
            <input
              type={defaultInputType.includes(type) ? "input" : "textarea"}
              className={clsx("relative", className)}
              {...field}
            />
            {meta.touched && meta.error && (
              <p className="text-error text-footer py-1">{meta.error}</p>
            )}
          </div>
        );
      }}
    </FormikField>
  );
};

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
};

interface FormProps<Values extends Record<string, unknown>> {
  children: React.ReactNode;
  initialValues: Values;
  onSubmit: (values: Values) => void | Promise<any>;
  validationSchema?: yup.ObjectSchema<yup.Maybe<Values>>;
}

interface FormCoumpound<Values extends Record<string, unknown>>
  extends React.FC<FormProps<Values>> {
  Field: typeof Field;
  Button: typeof Button;
}

export const Form: FormCoumpound<FormikValues> = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormikForm className="space-y-4">{children}</FormikForm>
    </Formik>
  );
};

Form.Field = Field;
Form.Button = Button;
