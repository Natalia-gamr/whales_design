import useWhalesService from "../../services/WhalesService";
import { Link, useParams } from "react-router-dom";
import './projectPageHeader.scss'
import {CreativeImg, CreativePrice} from "./creativ/Creativ";
import Steps from "../steps/Steps";
import Gallery from "../gallery/Gallery";
import Advantage from "../advantage/Advantage";
import {IdentityPrice, IdentityDescr, IdentityImg} from "./identity/Identity";
import  {WebsitesPrice, WebsitesImg } from "./websites/Websites";
import  {LogoPrice, LogoImg } from "./logo/Logo";
import {PresentPrice,  PresentImg } from "./presentation/Presentation";





const ProjectPageHeader = () => {

    const {arr} = useWhalesService()

    const params = useParams();
    const serviceLink = params.link;
    const service = arr.services.find(p=>p.link === serviceLink);

    const Price = () => {
        switch (serviceLink) {
            case 'creativ':
                return <CreativePrice/>;               
            case 'websites':
                return <WebsitesPrice/>;                
            case 'identity':
                return <IdentityPrice/>;                
            case 'logo':
                return <LogoPrice/>;
            case 'presentation':
                return <PresentPrice/>;
            default:
                break;
        }
    }

    const Img = () => {
        switch (serviceLink) {
            case 'creativ':
                return <CreativeImg/>;               
            case 'websites':
                return <WebsitesImg/>;                
            case 'identity':
                return <IdentityImg/>;                
            case 'logo':
                return <LogoImg/>;
            case 'presentation':
                return <PresentImg/>;
            default:
                break;
        }
    }

    return (
        <>
            <div className="project__header container">
                <div className="project__heading_wrap">
                    <h2 className="project__heading_title title_h2">{`Разработка ${service.title}`}</h2>
                    <div className="project__heading_descr">{service.pageDescr}</div>
                    <div className="project__heading_buttons">
                        <Link to={`/brif/${service.buttonLink}`} href=""><button className="button button_blue">Заполнить бриф</button></Link>
                        <a href='#price'><button className="button button_white">Цены</button></a>
                    </div>
                </div>
                <Img/>
            </div>
            {serviceLink === 'identity' ? <IdentityDescr/> : <></>}
            <Steps/>
            <div id="price" className="price container">
                <Price/>
            </div>
            <Gallery/>
            <Advantage/>
        </>
        
    )
}

export default ProjectPageHeader;