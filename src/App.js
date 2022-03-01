import logo from "./logo.svg";
import "./App.css";
import "./Responsive.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./pages/Product/Product";
import News from "./pages/News/News";
import Careers from "./pages/Hiring/Careers";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { useEffect, useState } from "react";
import DetailCareer from "./components/TableCareer/DetailCareer";
function App() {
  const [offset, setOffset] = useState(window.pageYOffset);

  useEffect(() => {
    console.log("useEffect");
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  }

  return (
    <div className="App container-fluid w-screen">
      {" "}
      {offset == 0 ? (
        <div></div>
      ) : (
        <button
          onClick={() => {
            scrollToTop(400);
          }}
          className="w-12 h-12 bg-blue-400 z-50 fixed bottom-4 right-4 shadow-xl border-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
      <Router>
        <Header className="w-screen" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail" element={<DetailCareer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
