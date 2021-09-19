import React from 'react'

interface FormItemLanguageProps {
   language: string
   setLanguage: (value: string) => void
}

const FormItemLanguage: React.FC<FormItemLanguageProps> = ({ language, setLanguage }) => {
   const languages = ["Русский", "Английский", "Китайский", "Испанский"]

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

   return (
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
   )
}

export default FormItemLanguage