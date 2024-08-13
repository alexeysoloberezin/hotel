import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import AnimatedCursor from "react-animated-cursor";
import Restaurant from "./pages/Restaurant";
import Bar from "./pages/Bar";
import Accommodation from "./pages/Accommodation";
import AboutUs from "./pages/About";
import Spa from "./pages/Spa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import {useEffect} from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1350, // Длительность анимации в миллисекундах
      disable: window.innerWidth < 1024
    });
  }, []);

  return (
    <Router className={'App'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/spa" element={<Spa />} />
      </Routes>
      <AnimatedCursor
        innerSize={18}
        outerSize={18}
        color='193, 11, 111'
        outerAlpha={0.4}
        innerScale={0.8}
        outerScale={2}
        outerStyle={{
          border: '2px solid #fff',
          mixBlendMode: 'exclusion'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.swiper-pagination-bullet',
          '.link'
        ]}
        innerStyle={{
          backgroundColor: '#fff'
        }}
      />
    </Router>
  );
}

export default App;
