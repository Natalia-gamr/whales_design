import creative from '../../../resources/img/LDR.png'
import OpenModal from '../../modal/Modal';

export const CreativePrice = () => {
    
    return (
            <div>
                <div className="title_h3">Цены</div>
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
                        <div className="price__cost title_h2">₴0 000</div>                        < OpenModal className='button_white' title="Заказать"/>
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
    )
}

export const CreativeImg = () => {
    return (
        <img src={creative} alt=''/>
    )
}