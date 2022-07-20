import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

import './portfolio.scss'
import ImageShape8 from '../../resources/img/gallery/ImageShape8.png';
import ImageShape9 from '../../resources/img/gallery/ImageShape9.png';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div >
                <div className="portfolio__title title_h3">Наши работы</div>
                <Tabs className="portfolio__tabs">
                    <TabList className="portfolio__category">
                        <Tab className="portfolio__category_link link_15px">Все работы</Tab>
                        <Tab className="portfolio__category_link link_15px">Логотипы</Tab>
                        <Tab className="portfolio__category_link link_15px">Веб-сайты</Tab>
                        <Tab className="portfolio__category_link link_15px">Фирменный стиль</Tab>
                        <Tab className="portfolio__category_link link_15px">Иллюстрации</Tab>
                        <Tab className="portfolio__category_link link_15px">Презентации</Tab>
                        <Tab className="portfolio__category_link link_15px">Креативы</Tab>
                    </TabList>
                    <div className="portfolio__content">
                        <TabPanel id="tabcontent" className="portfolio__content_item">
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                        </TabPanel>
                        <TabPanel id="tabcontent" className="portfolio__content_item">
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                        </TabPanel>
                        <TabPanel id="tabcontent" className="portfolio__content_item">
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>                         
                        </TabPanel>
                        <TabPanel id="tabcontent" className="portfolio__content_item"> 
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                        </TabPanel>
                        <TabPanel id="tabcontent" className="portfolio__content_item"> 
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'></Link>  
                            <Link to='/singlePage'></Link>  
                            <Link to='/singlePage'></Link>  
                            <Link to='/singlePage'></Link>  
                            <Link to='/singlePage'></Link> 
                        </TabPanel>
                        <TabPanel id="tabcontent" className="portfolio__content_item">
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                                            
                        </TabPanel>
                        <TabPanel id="tabcontent" className="portfolio__content_item">
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape8} alt="" /></Link>  
                            <Link to='/singlePage'><img src={ImageShape9} alt="" /></Link>  
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default Portfolio