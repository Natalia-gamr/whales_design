import { Formik, Form, useField, Field } from "formik";
import { useEffect, useState} from "react";
import * as Yup from 'yup'
import './modal.scss'
import '../../style/style.scss'


const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="modal__form_item">
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
  


const OpenModal = (props) => {

   const [isModal, setModal] = useState(false);

    return (
        <>
        <button className={`button ${props.className}`} onClick={()=>setModal(true)}>{props.title}</button>
        <Modal
            isVisible = {isModal}
            onClose={()=>setModal(false)}
        />
    </>
    )
    
}

const Modal = ({isVisible = false, onClose}) => {

    const keydownHandler = ({key}) => {
        switch (key) {
            case 'Escape':
              onClose();
              break;
            default:
          }
    }

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });


    return !isVisible ? null : (
        <div className="modal">
            <div className="modal__close" onClick={onClose}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.5L16 15.5" stroke="black"/><path d="M16 0.5L1 15.5" stroke="black"/></svg>
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
                    onClose()
                }}

                >
                {({errors}) => (
                    <Form className="modal__form">
                        <div className="modal__flex">
                           <MyTextInput
                                label='Ваше имя*'
                                name='name'
                                type='text'
                                placeholder='Введите ваше имя'
                            />
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
                    
                        <div className="modal__form_submit">
                            
                            <div className="modal__form_check">
                                <Field type="checkbox" name='check' required/>
                                <label className="check" htmlFor="check">Согласие на обработку персональных данных</label>
                                {errors.check && <p className="error error__check">{errors.check}</p>}
                            </div>
                            <div className="modal__file">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">         
                                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                                    </svg>
                                    <label htmlFor="file" >
                                    <input type="file" name="file"/>
                                    Загрузить файл
                                </label>
                            </div>
                            <button type="submit"  className="button button_red">Отправить</button>
                        </div>
                    </Form>
                )}
                </Formik>
        </div>
    )
}

export default OpenModal;