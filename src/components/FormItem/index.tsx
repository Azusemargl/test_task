import React from 'react'
import { validator } from '../../utils/validator'
import './formItem.scss'

type FormTypeNames = "name" | "email" | "phone" | "language"
interface FormItemProps {
   label: string
   name: FormTypeNames
   placeholder?: string
   value: string
   setter: (value: string) => void
}

export const FormItem: React.FC<FormItemProps> = ({ label, name, placeholder, value, setter }) => {
   const [error, setError] = React.useState(false)

   const validation = (value: string, type: FormTypeNames) => {
      switch (type) {
         case "name":
            validator.name(value, setError, setter)
            break;

         case "email":
            validator.email(value, setError, setter)
            break;

         case "phone":
            validator.phone(value, setError, setter)
            break;
      
         default:
            break;
      }
   }

   return (
      <div className="form__group">
         <label className="form__label" htmlFor={name}>{label}</label>
         <input
            className="form__input"
            value={value}
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={e => validation(e.target.value, name)}
         />
         {error && <span className="form__error">Введено не корректное значение</span>}
      </div>
   )
}
