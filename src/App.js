import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Product from './pages/Product/Product';
import News from './pages/News/News';
import Careers from './pages/Hiring/Careers';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
