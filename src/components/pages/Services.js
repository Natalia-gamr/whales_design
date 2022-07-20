import { Link, useParams } from 'react-router-dom'
import useWhalesService from '../../services/WhalesService'
import './services.scss'

import { CreativeImg } from '../projectPageHeader/creativ/Creativ'



const Services = () => {

    

    const {arr} = useWhalesService();    

    const serviceList = arr.services.map((item) => {
        return (
                <div className="services__item" key={item.id}>
                    <div className="services__item_title title_h3">{item.name}</div>
                    <div className="services__item_descr title_15px">{item.descr}</div>
                    <Link to={`/${item.link}`} className="services__item_link link_15px">Подробнее <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF5C66" className="bi bi-arrow-right" viewBox="0 0 16 11"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></Link>
                    <div className={`services__${item.className}`}></div>
                </div>
        )
    })


    return (
        <section className="services">
            <div className="services__title">Услуги</div>
            <div className="services__items">
               {serviceList}
            </div>
        </section>
    
    )
}



export default Services;