import React from 'react'
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './carousel.scss'
import GraphicDesign from '../../resources/img/Graphic_design.png'
import Brending from '../../resources/img/brending.png'
import WebDesign from '../../resources/img/web_design.png'



const Carousel = () => {

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    }
  
    
    return(
        
        <Slider className="main__slider" {...settings}>
            <div className="main__slider_item">
                <p className="main__heading heading_graph"><span>01.</span> Графический дизайн</p>
                <img src={GraphicDesign} alt="Graphic design" className="main__img"/>
            </div>
            <div className="main__slider_item">
                <p className="main__heading heading_brend"><span>02.</span> Брендинг</p>
                <img src={Brending} alt="Brending" className="main__img"/>
            </div>
            <div className="main__slider_item">
                <p className="main__heading heading_web"><span>03.</span> Веб дизайн</p>
                <img src={WebDesign} alt="Web design" className="main__img"/>
            </div>
        </Slider>
    )
   
}

export default Carousel




 