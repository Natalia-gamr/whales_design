import Healthy from '../../../resources/img/clients/healthy.png'
import Metinvest from '../../../resources/img/clients/Metinvest.png'
import PhilipMorris from'../../../resources/img/clients/philip-morris.png'
import DivaniyaLabs from '../../../resources/img/clients/divaniya_labs.png'
import Vesco from '../../../resources/img/clients/vesco.png'
import JoyWay from '../../../resources/img/clients/joy_way.png'
import Kardinale from '../../../resources/img/clients/Karnidale.png'
import Ukrenergo from '../../../resources/img/clients/ukrenergo.png'
import FontemVentures from '../../../resources/img/clients/fontem_ventures.png'
import './clients.scss'




const Clients = () => {
    return (
            <div className="clients container">
                <div className="title_h3">Клиенты</div>
                <div className="clients__descr">Гордимся сотрудничеством с лидерами своих отраслей и счастливы быть их digital-партнером</div>
                <ul className="clients__category">
                    <li className="clients__category_item">
                        <img src={Healthy} alt="Healthy"/>
                    </li>
                    <li className="clients__category_item">
                        <img src={Metinvest} alt="Metinvest"/>
                    </li>
                    <li className="clients__category_item">
                        <img src={PhilipMorris} alt="PhilipMorris"/>
                    </li>
                    <li className="clients__category_item">
                        <img src={DivaniyaLabs} alt="DivaniyaLabs"/>
                    </li>
                    <li className="clients__category_item">
                        <img src={Vesco} alt="Vesco"/>
                    </li>
                    <li className="clients__category_item">
                        <img src={JoyWay} alt="JoyWay"/>
                    </li>
                    <li className="clients__category_item">
                        <img src={Kardinale} alt="Kardinale"/>
                    </li>
                    <li className="clients__category_item">
                        <img src={Ukrenergo} alt="Ukrenergo"/>
                    </li>
                    <li className="clients__category_item">
                        <img src={FontemVentures} alt="FontemVentures"/>
                    </li>
                </ul>
            </div>  
    )
}

export default Clients