import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import { Routes, Route} from "react-router-dom";
import Header from './component/Header';
import About from './pages/About';

function App() {
  return (
    <section className='mainContainer'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
    </section>
  );
}

export default App;