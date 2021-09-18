import React from 'react'

export const App = () => {
  return (
    <div className="container">
      <form className="form">
        <h2>Регистрация</h2>
        <p>Уже есть аккаунт? <a href="#">Войти</a></p>
        <div className="form__group">
          <label htmlFor="name">Имя</label>
          <input type="text" name="name" placeholder="Введите Ваше имя" />
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Введите Ваш email" />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Номер телефона</label>
          <input type="text" name="phone" placeholder="Введите номер телефона" />
        </div>
        <div className="form__group">
          <label htmlFor="name">Язык</label>
          <select name="language">
            <option value="russian">Русский</option>
            <option value="english">Английский</option>
            <option value="chinese">Китайский</option>
            <option value="spanish">Испанский</option>
          </select>
        </div>
        <div className="form__check">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Принимаю <a href="#">условия</a> использования</label>
        </div>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  )
}