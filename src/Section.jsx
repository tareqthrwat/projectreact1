import './Sectioncss.css';
import img from './img/img.png';
export default function Section() {
    return (
        <section className="col-12 d-flex ">
            <aside className='col-5 '>
                <h6>
                    <span>N</span>
                    <span>E</span>
                    <span>W </span>
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>D</span>
                    <span>U</span>
                    <span>C</span>
                    <span>T</span>
                </h6>
                <h1>XX99 Mark II Headpho</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
                <button>See Product</button>
            </aside>
            <article className='col-7 article'>
                <img src={img} alt="img"  className='col-12 '/>
            </article>
        </section>
    );
}