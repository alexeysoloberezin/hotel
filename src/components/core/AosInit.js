import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function AosInit(props) {

    useEffect(() => {
       AOS.init({
        duration: 1350, // Длительность анимации в миллисекундах
        disable: window.innerWidth < 1024
       });
    }, [])

  return (
    <div></div>
  );
}

export default AosInit;