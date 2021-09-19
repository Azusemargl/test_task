import React from 'react'
import { FormItem } from './components/FormItem'
import "./App.scss"

export const App = () => {
  const languages = ["Русский", "Английский", "Китайский", "Испанский"]
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [language, setLanguage] = React.useState("")
  const [check, setCheck] = React.useState(false)
  
  const onSetLanguage = (language: string) => {
    setLanguage(language)
    setSelecLanguage(false)
  }

  // Hide a selector after click
  const [selecLanguage, setSelecLanguage] = React.useState(false)
  const selectorRef = React.useRef<HTMLDivElement>(null)

  const handleOutsideClick = React.useCallback((e: MouseEvent) => {
    const path = e.composedPath()
    if (selectorRef.current !== null && !path.includes(selectorRef.current)) setSelecLanguage(false)
  }, [])

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, [selecLanguage, handleOutsideClick])

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, name: string, email: string, phone: string, language: string) => {
    event.preventDefault()
    console.log(`Имя: ${name};\nEmail: ${email};\nТелефон: ${phone};\nЯзык: ${language};`)
  }

  return (
    <div className="container">
      <form className="form">
        <div className="form__header">
          <h2 className="form__title">Регистрация</h2>
          <p className="form__subtitle">Уже есть аккаунт? <a href="#">Войти</a></p>
        </div> 
        <FormItem label="Имя" placeholder="Введите Ваше имя" name="name" value={name} setter={setName} />
        <FormItem label="Email" placeholder="Введите Ваш email" name="email" value={email} setter={setEmail} />
        <FormItem label="Телефон" placeholder="Введите номер телефона" name="phone" value={phone} setter={setPhone} />

        <div className="form__group">
          <div
            className={`form__selector-input ${selecLanguage ? "active" : ""}`}
            onClick={() => { setSelecLanguage(!selecLanguage) }}
            ref={selectorRef}
          >
            <div className="form__input">{language ? language : "Язык"}</div>
            <i className="form__selector-arrow"></i>
          </div>
          <div className={`form__selector ${selecLanguage ? "active" : ""}`}>
            {languages.map((item, index) => <p onClick={() => onSetLanguage(item)} key={index}>{item}</p>)}
          </div>
        </div>

        <div className="form__check">
          <label className="form__checkbox-label">
            Принимаю <a href="#">условия</a> использования
            <input type="checkbox" onChange={() => setCheck(!check)} />
            <span className="form__checkmark"></span>
          </label>
        </div>
        <button
          className="form__button"
          type="submit"
          disabled={!(name && email && phone && language && check)}
          onClick={e => onSubmit(e, name, email, phone, language)}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}