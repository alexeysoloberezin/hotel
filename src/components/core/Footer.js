import React from 'react';
import {Link} from "react-router-dom";
import Form from "../../blocks/Form";

const Footer = () => {
  const navItems = [
    {
      to: '/about',
      name: "About Us",
    },
    {
      to: '/accommodation',
      name: "Accommodation",
    },
    {
      to: '/restaurant',
      name: 'Petal Restaurant'
    },
    {
      to: "/bar",
      name: "Nectar Bar"
    },
    {
      to: "/spa",
      name: "Spa Room"
    },
  ];


  return (
    <footer className="bg-purple text-black py-[40px]">
      <div className="container">
        <div className={"mb-[40px]"}><img src="/logoBlack.png" alt=""/></div>
        <div className={"grid grid-cols-3 min-h-[400px]"}>
          <div className={"flex flex-col gap-[20px]"}>
            <p>Iris Hotel Boston</p>
            <a href="mailto:info@irishotelboston.com">info@irishotelboston.com</a>
            <a href="tel:+18575766900">+1 857 576-6900</a>
            <div className={"mt-auto"}>
              30 Webster St<br/>
              Brookline, MA 02446<br/>
              United States of America
            </div>
            <div className={"mt-[40px]"}>@2024</div>
          </div>
          <div>
            <ul className={"flex flex-col gap-[20px]"}>
              {navItems.map((item, index) => (
                <li key={index}><Link className={"uppercase"} to={item.to}>{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
