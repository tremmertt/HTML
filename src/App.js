import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
