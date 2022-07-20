import Steps from "../steps/Steps"
import PageHeader from "../pageHeader/PageHeader"

const Logo = () => {
    return (
        <section class="logo">
            <PageHeader/>
            <Steps/>
            <div class="logo__gallery">
                <div class="logo__title title_h3">Примеры работ</div>
                <div class="logo__gallery_wrap">
                    {/* <img src="img/gallery/Image Shape.png" alt="">
                    <img src="img/gallery/Image Shape-2.png" alt="">
                    <img src="img/gallery/Image Shape-6.png" alt=""> */}
                </div>
                {/* <a href=""><button class="button button_blue">Все работы</button></a> */}
            </div>
            <div class="logo__price">
                <div class="logo__title title_h3">Цены</div>
                <div class="logo__price_wrap">
                    <div class="logo__price_item">
                        <div class="logo__price_name">Обычный</div>
                        <div class="logo__price_cost title_h2">₴0 000</div>
                        {/* <a href=""><button class="button button_white">Заказать</button></a> */}
                        <div class="logo__price_items">
                            <div>2 концепции, 3 правки</div>
                            <div>3 дня</div>
                            <div>Исходные файлы (*ai)</div>
                            <div>Логотип в черном, белом и цветном варианте</div>
                            <div>Логотип в цветовом пространстве CMYK</div>
                        </div>
                    </div>
                    <div class="logo__price_item">
                        <div class="logo__price_name">Стандартный</div>
                        <div class="logo__price_cost title_h2">₴0 000</div>
                        {/* <a href=""><button class="button button_white">Заказать</button></a> */}
                        <div class="logo__price_items">
                            <div>3 концепции, 5 правок</div>
                            <div>2 дня</div>
                            <div>Услуги пакета "Обычный"</div>
                            <div>Презентация логотипа на мокапах (Вывески, Печатные медиа, Продукция)</div>
                            <div>Право на внесение правок после утверждения макета</div>
                        </div>
                    </div>
                    <div class="logo__price_item">
                        <div class="logo__price_name"> Максимальный</div>
                        <div class="logo__price_cost title_h2">₴0 000</div>
                        {/* <a href=""><button class="button button_white">Заказать</button></a> */}
                        <div class="logo__price_items">
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
           
        </section>
    
    )
}

export default Logo;