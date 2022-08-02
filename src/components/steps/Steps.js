import './steps.scss'

const Steps = () => {
    return (
        <div className="steps container">
            <div className="title_h3">Как выглядит Процесс разработки лого:</div>
                <div className="steps__wrap">
                    <div className="steps__item">
                        <div className="steps__number">01</div>
                        <div></div>
                        <div className="steps__descr">Изучение продукта или ниши деятельности компании</div>
                    </div>
                    <div className="steps__item">
                        <div className="steps__number">02</div>
                        <div></div>
                        <div className="steps__descr">Формирование технического задания</div>
                    </div>
                    <div className="steps__item">
                        <div className="steps__number">03</div>
                        <div></div>
                        <div className="steps__descr">Анализ основных конкурентов</div>
                    </div>
                    <div className="steps__item">
                        <div className="steps__number">04</div>
                        <div></div>
                        <div className="steps__descr">Визуализация концепций и прототипов (создание первых вариантов)</div>
                    </div>
                </div>
        </div>
    )
}

export default Steps;