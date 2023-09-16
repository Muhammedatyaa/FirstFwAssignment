import Style from './Footer.module.css'
export default function Footer (){
    return <>
        <footer className="text-white text-center">
            <div className = {`${Style.up} row  mx-auto d-flex justify-content-evenly align-items-center`}>
                <div className='col-md-4'>
                    <h3 className='text-uppercase'>Location</h3>
                    <p>2215 John Daniel Drive <br/> Clark, MO 65243</p>
                    
                </div>
                <div className='col-md-4'>
                    <h3 className='text-uppercase'>About the Web</h3>
                    <div className="icons">
                        <i className={`${Style.icon}  fa-brands fa-facebook-f `}></i>
                        <i className={`${Style.icon}  fa-brands fa-twitter`}></i>
                        <i className={`${Style.icon}  fa-brands fa-linkedin`}></i>
                        <i className={`${Style.icon}  fa-solid fa-globe`}></i>
                    </div>
                </div>
                <div className='col-md-4'>
                    <h3 className='text-uppercase'>About Freelancer</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <div className={`${Style.down}`}>Copyright © Your Website 2021</div>
        </footer>
    </>
}