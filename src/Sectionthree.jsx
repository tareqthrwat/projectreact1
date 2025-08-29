import './Sectionthreecss.css';
import sap from './img/sap.png';
export default function Sectionthree() {
    return (
        <>
            <section>
                <div className="container ">
                    <div id='row'>
                        <div className='col-6 overflow-hidden'>
                            <img src={sap} alt="sap" />
                        </div>
                        <div className='col-6 d-flex  align-items-center justify-content-center'>
                            <div className=' d-flex flex-column  col-6 gap-2'>
                                <h1 className='d-flex flex-column'>
                                    ZX9
                                    <span>SPEAKER</span> 
                                </h1>
                                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                                <button>See Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
