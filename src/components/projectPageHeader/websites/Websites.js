import websites from '../../../resources/img/web_design.png'
import OpenModal from '../../modal/Modal'

export const WebsitesPrice = () => {
    return (
            <>
                <div className="title title_h3">Цены</div>
                <div className="price__wrap_five">
                    <div className="price__flex">
                        <div className="price__item">
                            <div className="price__name">Корпоративный веб-сайт</div>
                            <div className="price__cost title_h2">₴0 000</div> 
                            < OpenModal className='button_white' title="Заказать"/>
                            <div className="price__items">
                                <div>До 20 дней</div>
                                <div>Версия для планшетов</div>
                                <div>Мобильная версия</div>
                                <div>Кликабельный прототип</div>
                            </div>
                        </div>
                        <div className="price__item">
                            <div className="price__name">Landing page</div>
                            <div className="price__cost title_h2">₴0 000</div>
                            < OpenModal className='button_white' title="Заказать"/>
                            <div className="price__items">
                                <div>До 7 дней</div>
                                <div>Версия для планшетов</div>
                                <div>Мобильная версия</div>
                                <div>Кликабельный прототип</div>
                            </div>
                        </div>
                        <div className="price__item">
                            <div className="price__name"> Интернет-магазин</div>
                            <div className="price__cost title_h2">₴0 000</div>
                            < OpenModal className='button_white' title="Заказать"/>
                            <div className="price__items">
                                <div>До 25 дней</div>
                                <div>Версия для планшетов</div>
                                <div>Мобильная версия</div>
                                <div>Кликабельный прототип</div>
                            </div>
                        </div>
                    </div>
                    <div className="price__flex">
                        <div className="price__item">
                            <div className="price__name"> SaaS</div>
                            <div className="price__cost title_h2">₴0 000</div>
                            < OpenModal className='button_white' title="Заказать"/>
                            <div className="price__items">
                                <div>До 20 дней</div>
                                <div>Версия для планшетов</div>
                                <div>Мобильная версия</div>
                                <div>Кликабельный прототип</div>
                            </div>
                        </div>
                        <div className="price__item">
                            <div className="price__name"> Индивидуальный</div>
                            <div className="price__descr">
                                <div className="price__title title_h2">Уникальный проект?
                                </div>
                                <div className="price__text">Мы в деле! Давайте обсудим условия подходящие, именно для вас!</div>
                                < OpenModal className='button_white' title="Заказать"/>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </>
    )
}

export const WebsitesImg = () => {
    return (
        <img src={websites} alt=''/>
    )
}