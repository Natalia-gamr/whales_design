import './steps.scss'

const Steps = () => {
    return (
        <div className="steps container">
            <div className="title_h3">Как выглядит Процесс разработки лого:</div>
            <div className="steps_wrap">
                <div className="steps_item">
                    <div className="steps_number">01</div>
                    <div></div>
                    <div className="steps_descr">Изучение продукта или ниши деятельности компании</div>
                </div>
                <div className="steps_item">
                    <div className="steps_number">02</div>
                    <div></div>
                    <div className="steps_descr">Формирование технического задания</div>
                </div>
                <div className="steps_item">
                    <div className="steps_number">03</div>
                    <div></div>
                    <div className="steps_descr">Анализ основных конкурентов</div>
                </div>
                <div className="steps_item">
                    <div className="steps_number">04</div>
                    <div></div>
                    <div className="steps_descr">Визуализация концепций и прототипов (создание первых вариантов)</div>
                </div>
            </div>
        </div>
    )
}

export default Steps