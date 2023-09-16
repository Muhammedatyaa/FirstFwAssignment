import Style from './Contact.module.css'
import '../../index.css'
import { useState } from 'react'
export default function Contact(){
    const [isActive, setIsActive] = useState(false);
    const [rightLabel, setRightLabel] = useState('')

    function inputChange(text , id) {
        setRightLabel(id)
        if (text !== '') {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    return <>
        <div className={`${Style.contact}`}>
            <div className="content">
                <div className='text-center'>
                    <h2 className={`title fs-1 fw-bolder text-uppercase`}>Contact Section</h2>
                    <div className="icon d-flex justify-content-center align-items-center">
                        <span className="line"></span>
                        <i className="star fa-solid fa-star mx-3"></i>
                        <span className="line"></span>
                    </div>
                </div>
                <form className="d-flex justify-content-center  flex-column w-50 mx-auto my-5">
                    <label htmlFor="userName" className={`${Style.label} ${ isActive ? rightLabel == "userName" ?  Style.active : "" :''}`}>userName:</label>
                    <input id='userName' onKeyUp={(e) => inputChange(e.target.value , e.target.id)} className=" position-relative form-control border-0 border-bottom p-2 my-2 shadow-none" type="text" placeholder='userName' />
                    <label htmlFor="userAge" className={`${Style.label} ${ isActive ? rightLabel == "userAge" ?  Style.active : "" :''}`}>userAge:</label>
                    <input id='userAge' onKeyUp={(e) => inputChange(e.target.value, e.target.id)} className=" position-relative form-control border-0 border-bottom p-2 my-2 shadow-none" type="number" placeholder='userAge' />
                    <label htmlFor="userEmail" className={`${Style.label} ${ isActive ? rightLabel == "userEmail" ?  Style.active : "" :''}`}>userEmail:</label>
                    <input id='userEmail' onKeyUp={(e) => inputChange(e.target.value, e.target.id)} className=" position-relative form-control border-0 border-bottom p-2 my-2 shadow-none" type="email" placeholder='userEmail' />
                    <label htmlFor="userPassword" className={`${Style.label} ${ isActive ? rightLabel == "userPassword" ?  Style.active : "" :''}`}>userPassword:</label>
                    <input id='userPassword' onKeyUp={(e) => inputChange(e.target.value, e.target.id)} className=" position-relative form-control border-0 border-bottom p-2 my-2 shadow-none" type="password" placeholder='userPassword' />
                    <button  type='button' className={`${Style.button} btn text-white my-4`}>send Message</button>
                </form>
            </div>
        </div>
    </>
} 