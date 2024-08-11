import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <Router className={'App'}>
      <Routes>
        <Route path="/" element={<Home />} />
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
