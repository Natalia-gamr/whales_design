import identity from '../../../resources/img/High_Five.png'

export const IdentityDescr = () => {
    return (
        <>
            <div className="descr container">
                <div className="title_h3">Что такое Фирменный стиль и что в него входит:
                </div>
                <div className="descr__text">В конечном итоге фирменный стиль - это способ общаться с миром, выделяться среди конкурентов и создавать впечатление о бренде, которое побуждает людей взаимодействовать с вами. Некоторые бренды превращают айдентику в искусство (например, Apple, LEGO или Levi’s).</div>
            </div>
            <div className="info">
                <div className="container">
                    <div className="title_h3">Что чаще всего входит в Фирменный стиль?</div>
                    <div className="info__descr">При разработке айдентики вам необходимо создать всеобъемлющий визуальный язык, который можно применить ко всему, от вашего веб-сайта до упаковки. И зависимости от ваших целей или продукта, этот список может быть больше или меньше:
                    </div>
                    <div className="info__items">
                        <div className="info__item">Логотип</div>
                        <div className="info__item">Иконки</div>
                        <div className="info__item">Цветовая палитра</div>
                        <div className="info__item">Креативы</div>
                        <div className="info__item">Типография</div>
                        <div className="info__item">Интерактивные элементы</div>
                        <div className="info__item">Печатная продукция</div>
                        <div className="info__item">Веб-дизайн</div>
                        <div className="info__item">Фотографии</div>
                        <div className="info__item">Брендбук</div>
                        <div className="info__item">Иллюстрации</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const IdentityPrice = () => {
    return (
        <div className="price container">
            <div className="title title_h3">Цены</div>
            <div className="price__wrap_five">
                <div className='price__flex'>
                    <div className="price__item">
                        <div className="price__name">Стартап</div>
                        <div className="price__cost title_h2">₴0 000</div>
                        <a href=""><button className="button button_white">Заказать</button></a>
                        <div className="price__items">
                            <div>Логотип</div>
                            <div>Цветовая схема</div>
                            <div>Типография</div>
                            <div>Визитка</div>
                            <div>Фирменный бланк</div>
                            <div>Папка</div>
                            <div>Конверт</div>
                        </div>
                    </div>
                    <div className="price__item">
                        <div className="price__name">Компания</div>
                        <div className="price__cost title_h2">₴0 000</div>
                        <a href=""><button className="button button_white">Заказать</button></a>
                        <div className="price__items">
                            <div>Услуги пакета "Стартап"</div>
                            <div>Паттерн/формы</div>
                            <div>Иконки</div>
                            <div>Иллюстрация</div>
                            <div>Оформление соц. сетей</div>
                        </div>
                    </div>
                    <div className="price__item">
                        <div className="price__name"> Корпорация</div>
                        <div className="price__cost title_h2">₴0 000</div>
                        <a href=""><button className="button button_white">Заказать</button></a>
                        <div className="price__items">
                            <div>Услуги пакета "Компания"</div>
                            <div>Маскот/Персонаж
                            </div>
                            <div>Изображения (подбор стиля)
                            </div>
                            <div>Брендбук</div>
                        </div>
                    </div>
                </div>
                <div className='price__flex'>
                    <div className="price__item">
                        <div className="price__name"> Ресторан</div>
                        <div className="price__cost title_h2">₴0 000</div>
                        <a href=""><button className="button button_white">Заказать</button></a>
                        <div className="price__items">
                            <div>Услуги пакета "Стартап"</div>
                            <div>Меню</div>
                            <div>Винная карта
                            </div>
                            <div>Коктейльная карта
                            </div>
                            <div>Бирдекель/Костер
                            </div>
                            <div>Счетница</div>
                            <div>Форма персонала
                            </div>
                            <div>Плейсмат</div>
                            <div>Резерв</div>
                            <div>Оформление соц. сетей</div>
                        </div>
                    </div>
                    <div className="price__item">
                        <div className="price__name"> Индивидуальный</div>
                        <div className="price__descr">
                            <div className="price__title title_h2">Уникальный проект?
                            </div>
                            <div className="price__text">Мы в деле! Давайте обсудим условия подходящие, именно для вас!</div>
                            <button className="button button_white">Заказать</button>
                        </div>
                    </div>
                </div>   
            </div>
        </div> 
   
    )
}

export const IdentityImg = () => {
    return (
        <img src={identity} alt=''/>
    )
}

