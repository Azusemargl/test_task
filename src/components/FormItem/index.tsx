import React from 'react'
import './formItem.scss'

interface FormItemProps {
   label: string
   name: string
   placeholder?: string
   value: string
   setter: (value: string) => void
}

export const FormItem: React.FC<FormItemProps> = ({ label, name, placeholder, value, setter }) => {
   const error = false

   return (
      <div className="form__group">
         <label className="form__label" htmlFor={name}>{label}</label>
         <input
            className="form__input"
            value={value}
            type="text"
            name={name}
            placeholder={placeholder}
            onChange={e => setter(e.target.value)}
         />
         {error && <span className="form__error">Введено не корректное значение</span>}
      </div>
   )
}
