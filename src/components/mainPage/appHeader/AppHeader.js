import '../../../style/style.scss'
import Carousel from '../../carousel/Carousel';
import OpenModal from '../../modal/Modal';
import './appHeader.scss'


const AppHeader = () => {

    
    
    return (
        <div className="main">
            <div className="main__container container">
                <div className="main__descr">
                    <div className="main__name title_h5">Whales Design</div>
                    <div className="main__title title_h3">Мы помогаем зарабатывать в интернете</div>
                    <OpenModal title="Обсудить проект" className="main__button">Обсудить проект</OpenModal>
                </div>
                <Carousel/>
            </div>
        </div>
    )
}

export default AppHeader;