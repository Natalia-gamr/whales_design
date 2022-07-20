

import './singlePage.scss'
import single from '../../resources/img/dog.png'


const SinglePage = () => {
    return (
        <div className="single">
            <div className="single__header">
                <img src={single} alt="" />
            </div>
            <div className="single__descr container">
                <div className="">
                    <div className="title_h3">Lorem ipsum dolor sit amet, consectetur adipiscing incididunt incididunt</div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                        <div>
                            <div>Клиент</div>
                            <div>Velit sed</div>
                        </div>
                        <div>
                            <div>Страна</div>
                            <div>Украина</div>
                        </div>
                    </div>
                    <a href="">Перейти на сайт</a>
                </div>
                <img src="" alt="" />
                <div>
                    <div className="title_h3">Lorem ipsum dolor sit amet</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <img src="" alt="" />
                </div>
                <img src="" alt="" />
                <div>
                    <div className="title_h3">Lorem ipsum dolor sit amet</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SinglePage