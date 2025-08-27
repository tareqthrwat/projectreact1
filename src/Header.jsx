import'./Headarcss.css';
export default function Header() {
    return (
        <>
        <header >
            <h1>audiophi</h1>
            <nav className='d-flex gap-4'>
                    <a href="#home">Home</a>
                    <a href="#HEADPHONES">HEADPHONES</a>
                    <a href="#HEADPHONES">SPEAKERS</a>
                    <a href="#HEADPHONES">EARPHONES</a>
            </nav>
            <h6>icon</h6>
        </header>
         <div className='spas col-12 bg-white'></div>
        </>
    );
}