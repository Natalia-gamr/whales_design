import { Link } from 'react-router-dom';
import useWhalesService from '../../../services/WhalesService';

import './brifs.scss'


const Brifs = () => {

    const {arr} = useWhalesService();

    const BrifList = arr.brifs.map((item) => {
        return (
            <li className="brifs__category_item" key={item.id}>
                <Link to={`/brif/${item.descr}`} className=" brifs__title">{item.name} <p>{item.info.toLowerCase()}</p>
                </Link>
            </li>
        ) 
    }) 


    return (
            <div className="brifs container">
                <div className="title_h3">Брифы</div>
                <div className="brifs__descr">Помогите нам, сделать ваш проект лучше! После заполнения брифа, 
                    Мы свяжемся с вами в ближайшее время!</div>
                <ul className="brifs__category">
                    {BrifList}
                </ul>
            </div>
    )
}

export default Brifs