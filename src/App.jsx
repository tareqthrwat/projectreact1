import Header from './Header.jsx';
import Section from './Section.jsx'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';   
import Sectiontwo from './Sectiontwo.jsx';
import Sectionthree from './Sectionthree.jsx';  
import  {Sectionfour}  from './Sectionfour.jsx';
import Sectionfive from './Sectionfive.jsx';
import Sectionsix from './Sectionsix.jsx';
import Footer from './Footer.jsx';

export default function App() {
    return (
        <div>
            <Header />
            <Section />
            <Sectiontwo />
            <Sectionthree />
            <Sectionfour />
            <Sectionfive />
            <Sectionsix />
            <Footer />
        </div>
    );
}