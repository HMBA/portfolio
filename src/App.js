import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header'; 
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Project from './components/Project';
import Testimonials from './components/Testimonial';
 

function App() {
  return (
<>
    <Navbar/>
 <Header/>
 <Services/>
 <Project/>
 <Testimonials/>
 <Contact/>
 <Footer/>
 
</>
  );
}

export default App;
