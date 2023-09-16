import Style from './Home.module.css'
import {ReactComponent as Avatar} from "../../Assets/avatar/avataaars (1).svg"

export default function Home(){
    return <>
        <div className={`${Style.home} d-flex justify-content-center align-items-center`}>
            <div className="content">
                <div className={`${Style.avatar} text-center`}>
                    <Avatar/>
                </div>
                <div className='text-center my-3'>
                        <h2 className={`text-white fs-1 fw-bolder text-uppercase`}>Start Framework</h2>
                        <div className="icon my-3 d-flex justify-content-center align-items-center">
                            <span className="line bg-white"></span>
                            <i className="text-white fa-solid fa-star mx-3"></i>
                            <span className="line bg-white"></span>
                        </div>
                        <p className='text-white my-3'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
    </>
}