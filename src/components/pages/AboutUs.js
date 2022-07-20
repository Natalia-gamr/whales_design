import './aboutUs.scss'
import maps from '../../resources/img/Geogr.png'
import whale from '../../resources/img/whaleabout.png'

const AboutUs = () => {
    return (
        <section className="about">
            <div>
                <div className="about__title">
                    <div className="about__title_h1">Wha<br/><span>les</span></div>
                    <img className="about__title_img" src={whale} alt=""/>
                </div>
                <div className="about__descr">
                    <div className="about__descr_title">О нас</div>
                    <div className="about__descr_text">Мы помогаем упаковывать бизнес по всему миру, и создаем дизайн, 
                        который, остается актуальным и вызывает эмоции даже в нашу эпоху фаст-фуд информации! 
                        <br/><br/>
                        Сотрудничая с веб-студиями, креативными агентствами, издателями, а также разработчиками мобильных игр и арбитражными командами со всего земного шара, мы всегда помним о репутации, следим за качеством, и предоставляем услуги высшего качества.</div>
                </div>
            </div>
            <div className="about__items">
                <div className="about__item">
                    <div className="about__item_title">Экономия</div>
                    <div className="about__item_descr">Отсутствие офиса, помогает нам оказывать услуги премиального качества, 
                        за более низкую цену</div>
                </div>
                <div className="about__item">
                    <div className="about__item_title">Скорость</div>
                    <div className="about__item_descr">У нас небольшая команда,
                        а значит принятие решений занимает гораздо меньшее количество времени</div>
                </div>
                <div className="about__item">
                    <div className="about__item_title">Прозрачность</div>
                    <div className="about__item_descr">Сразу после начала работы, вы будете подключены к нашему удаленному офису, где напрямую сможете общаться с Дизайнером, Менеджером или же Руководителем агентства</div>
                </div>
                <div className="about__item">
                    <div className="about__item_title">Удобство</div>
                    <div className="about__item_descr">Мы будем предоставлять вам регулярные отчеты 
                        о стадии на которой, находится ваш дизайн</div>
                </div>
            </div>
            <div className="about__maps">
                <div className="about__maps_title">География наших клиентов</div>
                <img src={maps} alt="" className="about__maps_img"/>
                <div className="about__maps_items">
                    <div className="about__maps_item">45</div>
                    <div className="about__maps_item">125</div>
                    <div className="about__maps_item">15</div>
                    <div className="about__maps_item">4</div>
                    <div className="about__maps_item">35</div>
                    <div className="about__maps_item">8</div>
                    <div className="about__maps_item">3</div>
                </div>
                <div className="about__maps_stat">
                    <div className="about__maps_qty"><span>55+</span>стран по всему миру</div>
                    <div className="about__maps_qty"><span>235+</span>довольных клиентов</div>
                    <div className="about__maps_qty"><span>10 000+</span>часов работы</div>
                </div>
            </div>
        </section>
   
    )
}

export default AboutUs;