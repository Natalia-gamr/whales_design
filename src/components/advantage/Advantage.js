import rocket from '../../resources/icons/rocket.png'
import dog from '../../resources/icons/dog.png'
import box from '../../resources/icons/box.png'
import moneybox from '../../resources/icons/moneybox.png'

import './advantage.scss'

const Advantage = () => {
    return (
        <div className="advantage container">
            <div className=" title_h3">Преимущества работы с нами</div>
            <div className="advantage__items">
                <div className="advantage__wrap">
                    <img src={rocket} alt="" className="advantage__img"/>
                    <div className="advantage__descr">Большой опыт (более 800+ успешных разработок)</div>
                </div>
                <div className="advantage__wrap">
                    <img src={dog} alt="" className="advantage__img"/>
                    <div className="advantage__descr">Команда опытных и профессиональных дизайнеров</div>
                </div>
                <div className="advantage__wrap">
                    <img src={box} alt="" className="advantage__img"/>
                    <div className="advantage__descr">Бесплатные консультации по разработке дизайна</div>
                </div>
                <div className="advantage__wrap">
                    <img src={moneybox} alt="" className="advantage__img"/>
                    <div className="advantage__descr">Комплексный подход экономия</div>
                </div>
            </div>
        </div>
    )
}

export default Advantage