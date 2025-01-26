import clsx from "clsx"
import { Field } from "./Field"
import { FieldType } from "./FieldType"

type DynamicFormFieldProps = {
  field: Field
  className?: string
  onChange?: (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, title: string, type: FieldType) => void
}

export const DynamicFormField: React.FC<DynamicFormFieldProps> = ({ field: { type, title }, onChange, className }) => {
  const defaultInputType = ['email', 'text', 'password', 'date', 'number', 'tel']
  if (defaultInputType.includes(type))
    return (
      <input
        type={type}
        name={title}
        className={
          clsx(
            "bg-neutral-jet border border-neutral-jet p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-dim-gray text-neutral-white-smoke",
            className
          )
        }
        onChange={(e) => onChange?.(e, title, type)}
      />
    )

  if (type === 'textarea')
    return (
      <textarea
        name={title}
        className={
          clsx(
            "bg-neutral-jet border border-neutral-jet p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-dim-gray text-neutral-white-smoke",
            className
          )
        }
        onChange={(e) => onChange?.(e, title, type)}
      />
    )

  return null
}