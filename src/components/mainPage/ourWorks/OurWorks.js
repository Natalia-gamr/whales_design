import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

import './ourWorks.scss'
import '../../../style/style.scss'
import ImageShape from '../../../resources/img/gallery/ImageShape.png';
import ImageShape1 from '../../../resources/img/gallery/ImageShape1.png';
import ImageShape2 from '../../../resources/img/gallery/ImageShape2.png';
import ImageShape3 from '../../../resources/img/gallery/ImageShape3.png';
import ImageShape4 from '../../../resources/img/gallery/ImageShape4.png';
import ImageShape5 from '../../../resources/img/gallery/ImageShape5.png';
import ImageShape6 from '../../../resources/img/gallery/ImageShape6.png';
import ImageShape7 from '../../../resources/img/gallery/ImageShape7.png';


const OurWorks = () => {


    return (
        <section className="our-works container">
            <div className="title_h3">Наши работы</div>           
                <Tabs className="our-works__tabs">
                    <div className="our-works__tabwrap">
                        <TabList className='our-works__tabname'>
                            <Tab className="link_15px">Логотипы</Tab>
                            <Tab className="link_15px">Веб-сайты</Tab>
                            <Tab className="link_15px">Фирменный стиль</Tab>
                            <Tab className="link_15px">Иллюстрации</Tab>
                        </TabList>
                        <div className="our-works__all">
                            <Link  to='/portfolio'  className='link_15px'>
                            Все работы <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF5C66" className="bi bi-arrow-right" viewBox="0 0 16 11"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="our-works__tabs_content">
                        <TabPanel id="content-1" className="our-works__tabs_gallery content_show">
                            <img src={ImageShape} alt="gallery"/>
                            <img src={ImageShape2} alt="gallery"/>
                            <img src={ImageShape5} alt="gallery"/>
                            <img src={ImageShape7} alt="gallery"/>
                            <img src={ImageShape4} alt="gallery"/>
                        </TabPanel>
                        <TabPanel id="content-2" className="our-works__tabs_gallery">
                            <img src={ImageShape5} alt="gallery"/>
                            <img src={ImageShape3} alt="gallery"/>
                            <img src={ImageShape} alt="gallery"/>
                        </TabPanel>
                        <TabPanel id="content-3" className="our-works__tabs_gallery">
                            <img src={ImageShape6} alt="gallery"/>
                            <img src={ImageShape4} alt="gallery"/>
                            <img src={ImageShape5} alt="gallery"/>
                            <img src={ImageShape2} alt="gallery"/>
                            <img src={ImageShape} alt="gallery"/>
                        </TabPanel>
                        <TabPanel id="content-4" className="our-works__tabs_gallery">
                            <img src={ImageShape} alt="gallery"/>
                            <img src={ImageShape7} alt="gallery"/>
                            <img src={ImageShape2} alt="gallery"/>
                    </TabPanel>
                    </div>
                    
                        
                </Tabs>
            <a href=''><button className="button button_blue">Все работы</button></a>        
                
            
        </section>
    )
}

export default OurWorks