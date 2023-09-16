import Style from './Portfolio.module.css'
import imgone from '../../Assets/Images/poert1.png'
import imgtwo from '../../Assets/Images/port2.png'
import imgthree from '../../Assets/Images/port3.png'
import { useState } from 'react'
export default function Portfolio(){
    
    let [imgSrc , setImgSrc] = useState('')
    
    return <>
    <div className={`${Style.portfolio}`}>
        <div className="content container">
            <div className='text-center'>
                <h2 className={`title fs-1 fw-bolder text-uppercase`}>Portfolio Component</h2>
                <div className="icon d-flex justify-content-center align-items-center">
                    <span className="line"></span>
                    <i className="star fa-solid fa-star mx-3"></i>
                    <span className="line"></span>
                </div>
            </div>
            <div className="row gy-4 my-4">
                <div className="col-md-6 col-lg-4" >
                    <div className={`${Style.box} position-relative`}>
                        <img src={imgone}  alt="" className='w-100'/>
                        <div onClick={()=>{setImgSrc(`${imgone}`)}} className={`${Style.cover} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center fw-bold`}>
                            <i  className="text-white fa-solid fa-plus fa-6x "></i>
                        </div>
                    </div> 
                </div>                 
                <div className="col-md-6 col-lg-4">
                    <div className={`${Style.box} position-relative`}>
                        <img src={imgtwo}   alt="" className='w-100'/>
                        <div onClick={()=>{setImgSrc(`${imgtwo}`)}} className={`${Style.cover} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center fw-bold`}>
                            <i  className="text-white fa-solid fa-plus fa-6x "></i>
                        </div>
                    </div> 
                </div>                 
                <div className="col-md-6 col-lg-4">
                    <div className={`${Style.box} position-relative`}>
                        <img src={imgthree}  alt="" className='w-100'/>
                        <div onClick={()=>{setImgSrc(`${imgthree}`)}} className={`${Style.cover} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center fw-bold`}>
                            <i  className="text-white fa-solid fa-plus fa-6x "></i>
                        </div>
                    </div> 
                </div>                 
                <div className="col-md-6 col-lg-4">
                    <div className={`${Style.box} position-relative`}>
                        <img src={imgone}  alt="" className='w-100'/>
                        <div onClick={()=>{setImgSrc(`${imgone}`)}} className={`${Style.cover} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center fw-bold`}>
                            <i  className="text-white fa-solid fa-plus fa-6x "></i>
                        </div>
                    </div> 
                </div>                 
                <div className="col-md-6 col-lg-4">
                    <div className={`${Style.box} position-relative`}>
                        <img src={imgtwo}  alt="" className='w-100'/>
                        <div onClick={()=>{setImgSrc(`${imgtwo}`)}} className={`${Style.cover} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center fw-bold`}>
                            <i  className="text-white fa-solid fa-plus fa-6x "></i>
                        </div>
                    </div> 
                </div>                 
                <div className="col-md-6 col-lg-4">
                    <div className={`${Style.box} position-relative`}>
                        <img src={imgthree}  alt="" className='w-100'/>
                        <div onClick={()=>{setImgSrc(`${imgthree}`)}} className={`${Style.cover} position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center fw-bold`}>
                            <i  className="text-white fa-solid fa-plus fa-6x "></i>
                        </div>
                    </div> 
                </div>                   
            </div>
        </div>  
        
        <div className={`${Style.overlay} ${imgSrc != '' ? 'd-flex':'d-none'} justify-content-center align-items-center position-fixed h-100 w-100 top-0 end-0 `}>
            <div onClick={()=>{setImgSrc('')}} className='w-100 h-100'></div>
            <img src={imgSrc} alt="" className="position-absolute" width={600} />
        </div>
    </div>
    </>
}