import './Sectiontwocss.css';
import hetphone from './img/hetphone.png';
import ierbods from './img/ierbods.png';
import sap from './img/sap.png';
export default function Sectiontwo() {
    return (
        <>
            <section className='p-3 sectiontwo'>
                <article className='container  col-12 gap-2'>
                    <div className='col-4 d-flex flex-column align-items-center ' >
                        <div className='col-12 d-flex justify-content-center bg-white position-relative '>
                            <img src={hetphone} alt="hetphone" className='col-5 position-absolute ' />
                        </div>
                        <div className=' col-12 d-flex flex-column align-items-center mt-4 pt-5  son'>
                            <h6>HEADPHONES</h6>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div className='col-4 d-flex flex-column align-items-center '>
                        <div className='col-12 d-flex justify-content-center bg-white position-relative'>
                            <img src={ierbods} alt="ierbods" className='col-5 position-absolute  ' />
                        </div>
                        <div className=' col-12 d-flex flex-column align-items-center mt-4 pt-5  son'>
                            <h6>SPEAKERS</h6>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div className='col-4 d-flex flex-column align-items-center '>
                        <div className='col-12 d-flex justify-content-center bg-white position-relative'>
                            <img src={sap} alt="sap" className='col-5 position-absolute  ' />
                        </div>
                        <div className=' col-12 d-flex flex-column align-items-center mt-4 pt-5  son'>
                            <h6>EARBUDS</h6>
                            <p>Shop</p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}