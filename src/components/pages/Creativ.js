
const Creativ = () => {
    return (
        <section class="creativ">
            <div class="creativ__heading">
                <div class="creativ__heading_wrap">
                    <div class="creativ__heading_title title_h2">Разработка Креатива</div>
                    <div class="creativ__heading_descr">Разрабатываем креативы для соц. сетей, контекстной рекламы, а также для мобильных игр и приложений!</div>
                    <div class="creativ__heading_buttons">
                        {/* <a href=""><button class="button button_blue">Заполнить бриф</button></a>
                        <a href=""><button class="button button_white">Цены</button></a> */}
                    </div>
                </div>
                {/* <img src="img/LDR.png" alt=""> */}
            </div>
            <div class="creativ__steps">
                <div class="creativ__title title_h3">Как выглядит Процесс разработки лого:</div>
                <div class="creativ__steps_wrap">
                    <div class="creativ__steps_item">
                        <div class="creativ__steps_number">01</div>
                        <div></div>
                        <div class="creativ__steps_descr">Изучение продукта или ниши деятельности компании</div>
                    </div>
                    <div class="creativ__steps_item">
                        <div class="creativ__steps_number">02</div>
                        <div></div>
                        <div class="creativ__steps_descr">Формирование технического задания</div>
                    </div>
                    <div class="creativ__steps_item">
                        <div class="creativ__steps_number">03</div>
                        <div></div>
                        <div class="creativ__steps_descr">Анализ основных конкурентов</div>
                    </div>
                    <div class="creativ__steps_item">
                        <div class="creativ__steps_number">04</div>
                        <div></div>
                        <div class="creativ__steps_descr">Визуализация концепций и прототипов (создание первых вариантов)</div>
                    </div>
                </div>
            </div>
            <div class="creativ__gallery">
                <div class="creativ__title title_h3">Примеры работ</div>
                <div class="creativ__gallery_wrap">
                    {/* <img src="img/gallery/Image Shape.png" alt="">
                    <img src="img/gallery/Image Shape-2.png" alt="">
                    <img src="img/gallery/Image Shape-6.png" alt=""> */}
                </div>
                {/* <a href=""><button class="button button_blue">Все работы</button></a> */}
            </div>
            <div class="creativ__price">
                <div class="creativ__title title_h3">Цены</div>
                <div class="creativ__price_wrap">
                    <div class="creativ__price_item">
                        <div class="creativ__price_name">Обычный</div>
                        <div class="creativ__price_cost title_h2">₴0 000</div>
                        {/* <a href=""><button class="button button_white">Заказать</button></a> */}
                        <div class="creativ__price_items">
                            <div>3 дня</div>
                            <div>Премиальное качество
                            </div>
                            <div>2 правки</div>
                        </div>
                    </div>
                    <div class="creativ__price_item">
                        <div class="creativ__price_name">Стандартный</div>
                        <div class="creativ__price_cost title_h2">₴0 000</div>
                        {/* <a href=""><button class="button button_white">Заказать</button></a> */}
                        <div class="creativ__price_items">
                            <div>2 дня</div>
                            <div>3 правки
                            </div>
                            <div>Премиальное качество
                            </div>
                            <div>Адаптация под разные форматы
                            </div>
                            <div>Внимание к деталям
                            </div>
                        </div>
                    </div>
                    <div class="creativ__price_item">
                        <div class="creativ__price_name"> Профессиональный</div>
                        <div class="creativ__price_cost title_h2">₴0 000</div>
                        {/* <a href=""><button class="button button_white">Заказать</button></a> */}
                        <div class="creativ__price_items">
                            <div>1 день
                            </div>
                            <div>4 правки
                            </div>
                            <div>Услуги пакета “Стандарт”</div>
                            <div>Арт дирекшн и контроль со стороны CEO Артура Михов
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="creativ__advantage">
                <div class="creativ__title title_h3">Преимущества работы с нами</div>
                <div class="creativ__advantage_items">
                    <div class="creativ__advantage_wrap">
                        {/* <img src="icons/rocket.png" alt="" class="creativ__advantage_img"> */}
                        <div class="creativ__advantage_descr">Большой опыт (более 800+ успешных разработок)</div>
                    </div>
                    <div class="creativ__advantage_wrap">
                        {/* <img src="icons/dog.png" alt="" class="creativ__advantage_img"> */}
                        <div class="creativ__advantage_descr">Команда опытных и профессиональных дизайнеров</div>
                    </div>
                    <div class="creativ__advantage_wrap">
                        {/* <img src="icons/box.png" alt="" class="creativ__advantage_img"> */}
                        <div class="creativ__advantage_descr">Бесплатные консультации по разработке дизайна</div>
                    </div>
                    <div class="creativ__advantage_wrap">
                        {/* <img src="icons/moneybox.png" alt="" class="creativ__advantage_img"> */}
                        <div class="creativ__advantage_descr">Комплексный подход экономия</div>
                    </div>
                </div>
            </div>
        </section>
   
    )
}

export default Creativ;