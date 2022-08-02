import React from "react"
import { Field, Formik, Form } from "formik"
import './feedback.scss'
import FeedbackImg from '../../resources/img/mail_form.png'

const Feedback= () => {

    return (

        <div className="feedback">
            <div className="feedback__heading">
                <div className="feedback__title title_h3">Обсудить проект</div>
                <div className="feedback__descr">Крутые проекты начинаются с заполнения этой формы</div>
                <img src={FeedbackImg} alt="mail-form" className="feedback__img"/>
            </div>

            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                    mesasge: '',
                    checked: [],
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                }}
                >
                <Form className="feedback__form">
                    <div className="feedback__form_item">
                        <label htmlFor="name">Ваше имя*</label>
                        <Field id="name" name="name" placeholder="Введите ваше имя" />
                    </div>
                    <div className="feedback__form_contacts">
                        <div className="feedback__form_item">
                            <label htmlFor="phone">Телефон*</label>
                            <Field id="phone" name="phone" placeholder="Введите номер телефона" />
                        </div>
                        <div className="feedback__form_item">
                        <label htmlFor="email">Email*</label>
                            <Field
                            id="email"
                            name="email"
                            placeholder="Введите электронный адрес"
                            type="email"
                            />
                        </div>
                    </div>
                    <div className="feedback__form_item">
                        <label htmlFor="message">Сообщение*</label>
                        <Field
                        id="message"
                        name="message"
                        placeholder="Введите сообщение"
                        />
                    </div>
                    <div className="feedback__form_submit">
                        <button type="submit"  className="feedback__form_button button">Отправить</button>
                    <div className="feedback__form_check">
                        <input type="checkbox" id="check" required/>
                        <label className="check" htmlFor="check">Согласие на обработку персональных данных</label>
                    </div>
                    </div>
                    
                </Form>
            </Formik>
        </div>
    )
}

export default Feedback