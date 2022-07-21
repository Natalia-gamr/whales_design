import './aboutUs.scss'
import maps from '../../resources/img/Geogr.svg'
import whale from '../../resources/img/whaleabout.png'

const AboutUs = () => {
    return (
        <section className="about container">
            <div>
                <div className="about__title">
                    <div className="about__title_h1">Wha<br/><span>les</span></div>
                    <img className="about__title_img" src={whale} alt=""/>
                </div>
                <div className="about__descr">
                    <div className="title_h3">О нас</div>
                    <div className="about__descr_text">Мы помогаем упаковывать бизнес по всему миру, и создаем дизайн, 
                        который, остается актуальным и вызывает эмоции даже в нашу эпоху фаст-фуд информации! 
                        <br/><br/>
                        Сотрудничая с веб-студиями, креативными агентствами, издателями, а также разработчиками мобильных игр и арбитражными командами со всего земного шара, мы всегда помним о репутации, следим за качеством, и предоставляем услуги высшего качества.</div>
                </div>
            </div>
            <div className="about__items">
                <div className="about__item">
                    <div className="title_h2">Экономия</div>
                    <div>Отсутствие офиса, помогает нам оказывать услуги премиального качества, 
                        за более низкую цену</div>
                </div>
                <div className="about__item">
                    <div className="title_h2">Скорость</div>
                    <div>У нас небольшая команда,
                        а значит принятие решений занимает гораздо меньшее количество времени</div>
                </div>
                <div className="about__item">
                    <div className="title_h2">Прозрачность</div>
                    <div>Сразу после начала работы, вы будете подключены к нашему удаленному офису, где напрямую сможете общаться с Дизайнером, Менеджером или же Руководителем агентства</div>
                </div>
                <div className="about__item">
                    <div className="title_h2">Удобство</div>
                    <div>Мы будем предоставлять вам регулярные отчеты 
                        о стадии на которой, находится ваш дизайн</div>
                </div>
            </div>
            <div className="about__maps">
                <div className="title_h3">География наших клиентов</div>
                <img src={maps} alt="" className="about__maps_img"/>
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