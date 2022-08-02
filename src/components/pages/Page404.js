import {Link} from 'react-router-dom'

import '../../style/style.scss'
import './page404.scss'
import errorImg from '../../resources/img/404.png'

const Page404 = () => {
    return (
        <div className="page404 container">
            <div className="page404__descr">
                <div className="title_h3">Упс, кажется такой страницы не существует!</div>
                <Link to="/"><button className="button button_blue">На главную</button></Link>
            </div>
            <img src={errorImg} alt="Error img" className='page404__img'/>
        </div>
    )
}

export default Page404;