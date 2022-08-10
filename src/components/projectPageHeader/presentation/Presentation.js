import present from '../../../resources/img/Office_Gal.png'
import OpenModal from '../../modal/Modal'

export const PresentPrice = () => {
    return (
        <>
        <div className="cost">
            <div className="title title_h3">Цены</div>
            <div className="cost__wrap">
                <div className="price__item">
                    <div className="cost_title"><p>от <span className="title_h2">₴000</span>/слайд</p>(зависит от сложности проекта)
                    </div>
                    <div className="price__items">
                        <div>От 1 дня</div>
                        <div>Несколько дизайнеров</div>
                        <div>Премиум качество 
                        </div>
                        <div>Подбор иконок и шрифтов
                        </div>
                        <div>Подготовка финальных файлов
                        </div>
                    </div>
                    < OpenModal className='button_blue' title="Заказать"/>
                </div>
                <div className="price__item">
                    <div className=" title_h2">Что входит в финальную стоимость:</div>
                    <div className="price__items">
                        <div>Обработка предоставленной информации</div>
                        <div>Разработка дизайн концепции оформления презентации</div>
                        <div>Демонстрация дизайн-концепции на примере нескольких страниц/слайдов</div>
                        <div>Доработка Дизайн концепции</div>
                        <div>Техническая ретушь изображений</div>
                        <div>Верстка всех страниц/слайдов презентации</div>
                        <div>Подготовка финальных файлов в нужных форматах</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="price">
            <div className="title title_h3">Цены инфографики к презентациям</div>
            <div className="price__wrap">
                <div className="price__item">
                    <div className="price__name">Обычный</div>
                    <div className="price__cost title_h2">₴0 000</div>
                    < OpenModal className='button_white' title="Заказать"/>
                    <div className="price__items">
                        <div>3 дня</div>
                        <div>Премиальное качество
                        </div>
                        <div>2 правки</div>
                    </div>
                </div>
                <div className="price__item">
                    <div className="price__name">Стандартный</div>
                    <div className="price__cost title_h2">₴0 000</div>
                    < OpenModal className='button_white' title="Заказать"/>
                    <div className="price__items">
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
                <div className="price__item">
                    <div className="price__name"> Профессиональный</div>
                    <div className="price__cost title_h2">₴0 000</div>
                    < OpenModal className='button_white' title="Заказать"/>
                    <div className="price__items">
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
        </>
         
   
    )
}

export const PresentImg = () => {
    return (
        <img src={present} alt=''/>
    )
}