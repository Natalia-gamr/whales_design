import { useField, Formik, Form, Field } from "formik"
import * as Yup from 'yup'

import './feedback.scss'
import FeedbackImg from '../../resources/img/mail_form.png'


const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="feedback__form_item">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} value={props.value}/>
            {meta.touched && meta.error ? (
                <p className="error">{meta.error}</p>
            ) : null}
        </div>
    )
}

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.number().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    check: Yup.bool().oneOf([true],'check please').required('Required'),
  });

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
                    number: '',
                    email: '',
                    message: '',
                    check: false,
                }}
                validationSchema={SignupSchema}

                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400)
                }}
                >
                {({errors}) => (
                    <Form className="feedback__form">
                        <MyTextInput
                            label='Ваше имя*'
                            name='name'
                            type='text'
                            placeholder='Введите ваше имя'
                        />
                        <div className="feedback__form_contacts">
                            <MyTextInput
                                label='Телефон*'
                                name='number'
                                type='text'
                                placeholder='Введите номер телефона'
                            />
                            <MyTextInput
                                label='Email*'
                                name='email'
                                type='email'
                                placeholder='Введите электронный адрес'
                            />
                        </div>
                        <MyTextInput
                            label='Сообщение*'
                            name='message'
                            type='text'
                            placeholder='Введите сообщение'
                        />                
                    
                        <div className="feedback__form_submit">
                            <button type="submit"  className="feedback__form_button button">Отправить</button>
                            <div className="feedback__form_check">
                                <Field type="checkbox" name='check' required/>
                                <label className="check" htmlFor="check">Согласие на обработку персональных данных</label>
                                {errors.check && <p className="error error__check">{errors.check}</p>}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Feedback