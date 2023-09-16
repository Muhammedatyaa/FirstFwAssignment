import Style from './About.module.css'
export default function About(){
    return <>
        <div className={`${Style.about} d-flex justify-content-center align-content-center flex-wrap`}>
            <div className='w-75 text-white text-center'>
                <h2 className='fs-1 text-uppercase fw-bolder my-3'>About Compontent</h2>
                <div className="icon d-flex justify-content-center align-items-center">
                    <span className="line bg-white"></span>
                    <i className="text-white fa-solid fa-star mx-3"></i>
                    <span className="line bg-white"></span>
                </div>
                <div className="info text-start d-flex justify-content-between p-2 my-2">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                </div>
        </div>
    </>
}