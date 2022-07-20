import useWhalesService from "../../services/WhalesService";
import {useParams} from "react-router-dom"

import'./brif.scss'
import { useState } from "react";
import { Formik, Form, useField } from "formik";

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="brif__item">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
};

const MyCheckbox = ({ children, ...props }) => {
    const [meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="brif__checkbox"> 
            <input className="hidden-checkbox" type="checkbox"/>
            <div className="checkbox"> 
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
            </div>
            {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="brif__item">
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

 const Brif = () => {

    const {arr} = useWhalesService()

    const params = useParams();
    const brifDescr = params.descr;
    const brif = arr.brifs.find(p=>p.descr === brifDescr);

    const [isActive, setIsActive] = useState('false')

    const openForms = () => {
        setIsActive(!isActive)
    }

    return (
            <>
                <div className="brif__heading">
                    <h2>{brif.info}</h2>
                    <button className={isActive ? 'button button_white' : 'brif__items'} onClick={openForms}>Начать</button>
                </div>
                <Formik 
                    initialValues={{
                        name: '',
                        number: '',
                        email: '',
                        companyName: '',
                        fieldOfActivity: '',
                        sertificateCheck: false,
                        priceCheck: false,
                        analogueCheck: false,
                        saleCheck: false,
                        siteFunctionality: 'sertificate',
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400)
                    }}
                >
                    <Form className={`container brif__items${isActive ? '' : '_block'}`}>
                        <div className="title_h3">Ваши данные</div>
                        <MyTextInput 
                            label='Ваше имя*'
                            name="name"
                            type="text"
                            placeholder="введите ваше имя"
                        />
                        <div className="brif__contacts">
                            <MyTextInput 
                                label='Телефон*'
                                name="number"
                                type="text"
                                placeholder="введите номер телефона"
                            />
                            <MyTextInput 
                                label='Email*'
                                name="email"
                                type="text"
                                placeholder="введите электронный адрес"
                            />
                        </div>
                        <div className="title_h3">Информация о компании</div>
                        <MyTextInput 
                            label='Название компании'
                            name="companyName"
                            type="text"
                            placeholder="введите текст"
                        />
                        <MyTextInput 
                            label='Сфера деятельности'
                            name="fieldOfActivity"
                            type="text"
                            placeholder="введите текст"
                        />
                        <div className="title_h3">Дизайн</div>
                        <MyCheckbox name="sertificateCheck">
                            Сертификаты, награды и прочие документы?    
                        </MyCheckbox>
                        <MyCheckbox name="priceCheck">
                            Не завышена ли цена?
                        </MyCheckbox>
                        <MyCheckbox name="analogueCheck">
                            Как выбрать среди большого количества аналогов?
                        </MyCheckbox>
                        <MyCheckbox name="saleCheck">
                            Есть какие-то скидки\акции?
                        </MyCheckbox>
                        <div className="title_h3">Функциональность сайта</div>
                        <MySelect name="siteFunctionality">Сфера деятельности
                            <option value="sertificate">Сертификаты, награды и прочие документы?</option>
                            <option value="price">Не завышена ли цена?</option>
                            <option value="analogue">Как выбрать среди большого количества аналогов?</option>
                            <option value="sale">Есть какие-то скидки\акции?</option>
                        </MySelect>
                        <div className="title_h3">Загрузить файл</div>
                        <div className="brif__file">
                            <label  id="label" htmlFor=""><span>Загрузить файлы <br/>Перетащить сюда или <a href="">выбрать</a></span></label>
                            <input  type="file"/>
                        </div>
                        <button type="submit" className={isActive ? 'brif__items' : 'button button_blue'}>Дальше</button>
                    </Form>
                </Formik>                     
            </>
        )
}

export default Brif;
