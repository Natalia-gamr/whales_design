import logo from '../../../resources/img/WFH.png'

export const LogoPrice = () => {
    return (
        <div className="price">
            <div className="title title_h3">Цены</div>
            <div className="price__wrap">
                <div className="price__item">
                    <div className="price__name">Обычный</div>
                    <div className="price__cost title_h2">₴0 000</div>
                    <a href=""><button className="button button_white">Заказать</button></a>
                    <div className="price__items">
                        <div>2 концепции, 3 правки</div>
                        <div>3 дня</div>
                        <div>Исходные файлы (*ai)</div>
                        <div>Логотип в черном, белом и цветном варианте</div>
                        <div>Логотип в цветовом пространстве CMYK</div>
                    </div>
                </div>
                <div className="price__item">
                    <div className="price__name">Стандартный</div>
                    <div className="price__cost title_h2">₴0 000</div>
                    <a href=""><button className="button button_white">Заказать</button></a>
                    <div className="price__items">
                        <div>3 концепции, 5 правок</div>
                        <div>2 дня</div>
                        <div>Услуги пакета "Обычный"</div>
                        <div>Презентация логотипа на мокапах (Вывески, Печатные медиа, Продукция)</div>
                        <div>Право на внесение правок после утверждения макета</div>
                    </div>
                </div>
                <div className="price__item">
                    <div className="price__name"> Максимальный</div>
                    <div className="price__cost title_h2">₴0 000</div>
                    <a href=""><button className="button button_white">Заказать</button></a>
                    <div className="price__items">
                        <div>5 концепции, 7 правок</div>
                        <div>3 дня</div>
                        <div>Услуги пакета "Стандарт"</div>
                        <div>Подбор фирменных шрифтов</div>
                        <div>Подбор цветовой палитры</div>
                        <div>Арт-дирекшн и контроль со стороны CEO Артура Михова</div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export const LogoImg = () => {
    return (
        <img src={logo} alt=''/>
    )
}