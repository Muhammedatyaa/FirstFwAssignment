import Style from './Notfound.module.css'
export default function Notfound(){
    return <>
        <div className={`${Style.notfound} d-flex justify-content-center align-items-center`}>
            <div className='content text-center'>
                <h1 className='fs-1 fw-bolder text-white'>404</h1>
                <p className={`text-white fs-5 fw-bold`}>
                    File not found
                    <br/>
                    The site configured at this address does not contain the requested file.
                    <br/>
                    If this is your site, make sure that the filename case matches the URL as well as any file permissions.
                </p>
            </div>
            
        </div>
    </>
}