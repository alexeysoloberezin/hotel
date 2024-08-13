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
    <footer className="bg-purple text-black pt-[90px] pb-[30px]">
      <div className="container">
        <div className={"mb-[40px] "}><img className={"w-[108px]"} src="/logoBlack.png" alt=""/></div>
        <div  className={"grid lg:grid-cols-3 lg:gap-[15px] gap-[50px] lg:min-h-[400px]"}>
          <div className={"flex flex-col gap-[20px]"}>
            <p>Iris Hotel Boston</p>
            <a href="mailto:info@irishotelboston.com">info@irishotelboston.com</a>
            <a href="tel:+18575766900" className={"underline"}>+1 857 576-6900</a>
            <div className={"mt-auto"}>
              30 Webster St<br/>
              Brookline, MA 02446<br/>
              United States of America
            </div>
            <div className={"mt-[40px] lg:block hidden"}>@2024</div>
          </div>
          <div>
            <ul className={"flex flex-col gap-[20px]"}>
              {navItems.map((item, index) => (
                <li key={index}><Link className={"uppercase"} to={item.to}>{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <Form/>
          </div>
        </div>
        <div className={"mt-[40px] lg:hidden"}>@2024</div>

      </div>
    </footer>
  );
};

export default Footer;
