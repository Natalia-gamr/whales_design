import { Link } from "react-router-dom";
import useWhalesService from "../../services/WhalesService";



const BrifList = () => {

    const {arr} = useWhalesService();


    const BrifList = arr.brifs.map((item) => {
        return (
            <li key={item.id}>
                <Link to={`/brif/${item.descr}`} className="footer__info_link link_12px">{item.info}</Link>
            </li>
        ) 
    }) 

    return (
        <>
            <div  href="#brifs" className="footer__info_title link_15px">Брифы</div>
            <ul>
                {BrifList}
            </ul>
        </>
    )
}

export default BrifList