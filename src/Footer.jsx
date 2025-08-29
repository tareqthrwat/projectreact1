import './Footer.css';
export default function Footer() {
    return (
        <>
            <footer className='mt-5'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center '>
                        <h1>audiophi</h1>
                        <nav className='d-flex gap-4'>
                            <a href="#home">Home</a>
                            <a href="#HEADPHONES">HEADPHONES</a>
                            <a href="#HEADPHONES">SPEAKERS</a>
                            <a href="#HEADPHONES">EARPHONES</a>
                        </nav>
                    </div>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <div className='col-6 mt-4 d-flex flex-column gap-3'>
                            <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                            <p>Copyright 2021. All Rights Reserved</p>
                        </div>
                        <div className='col-6 d-flex justify-content-end align-items-center mt-4 gap-3'>
                            <i class="bi bi-facebook" id='icon' ></i>
                            <i class="bi bi-twitter" id='icon' ></i>
                            <i class="bi bi-instagram" id='icon' ></i>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}
