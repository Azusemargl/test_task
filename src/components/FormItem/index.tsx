import React from 'react'
import './formItem.scss'

interface FormItemProps {
   label: string
   name: string
   placeholder?: string
}

export const FormItem: React.FC<FormItemProps> = ({ label, name, placeholder }) => {
   const error = false

   return (
      <div className="form__group">
         <label className="form__label" htmlFor={name}>{label}</label>
         <input className="form__input" type="text" name={name} placeholder={placeholder} />
         {error && <span className="form__error">Validation error message</span>}
      </div>
   )
}
