import { Link } from 'react-router-dom';

import './gallery.scss';
import imageShape from '../../resources/img/gallery/ImageShape.png';
import imageShape2 from '../../resources/img/gallery/ImageShape2.png';
import imageShape6 from '../../resources/img/gallery/ImageShape6.png';

const Gallery = () => {
    return (
        <div className="gallery container">
            <div className="title_h3">Примеры работ</div>
            <div className="gallery__wrap">
                <img src={imageShape} alt=""/>
                <img src={imageShape2} alt=""/>
                <img src={imageShape6} alt=""/>
            </div>
            <Link to="/portfolio"><button className="button button_blue">Все работы</button></Link>
        </div>
    )
   
}

export default Gallery