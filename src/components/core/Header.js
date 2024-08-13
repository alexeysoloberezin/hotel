import React, {useEffect, useState} from 'react';
import {handleScroll} from "../../utils/handleScroll";
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import Arrow from "../icon/Arrow";
import Button from "../ui/Button";

const Header = ({transparent}) => {
  const [isActiveBurger, setIsActiveBurger] = useState(false)
  const navItems = [
    {
      to: '/about',
      img: "/navImg1.png",
      name: "About Us",
    },
    {
      to: '/accommodation',
      img: "/navImg2.png",
      name: "Accommodation",
    },
    {
      to: '/restaurant',
      img: "/navImg3.png",
      name: 'Petal Restaurant'
    },
    {
      to: "/bar",
      img: "/navImg4.png",
      name: "Nectar Bar"
    },
    {
      to: "/spa",
      img: "/navImg5.png",
      name: "Spa Room"
    },
  ];

  const handleClickLink = (e, to) => {
    handleScroll(e, to)
    setIsActiveBurger(false)
  }

  useEffect(() => {
    if (isActiveBurger) {
      document.querySelector('html').classList.add('blocked')
    } else {
      document.querySelector('html').classList.remove('blocked')
    }
  }, [isActiveBurger])

  return (
    <header
      className={clsx("rounded-base custom transition-colors py-[20px] absolute top-0 left-0 z-50 w-full", {'text-black': isActiveBurger})}
    >

      <div className={'container flex items-center justify-between w-full relative z-50'}>
        <a href={"tel:+18575766900"} className={"transition-colors md:block hidden"}>
          +1 857 576-6900
        </a>
        <Link to={'/'} className={"relative w-[125px] h-[60px]"}>
          <img className={clsx({
            'md:w-[124px] md:h-[62px]': isActiveBurger,
            'md:w-[125px] md:h-[51px]': !isActiveBurger
          }, "w-[90px] object-contain absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]")} src={!isActiveBurger ? '/logo.png' : '/logoBlack.png'} alt=""/>
        </Link>

        <div className={"min-w-[142px]"}>
          <div className={clsx("menu-burger link", {
            'active': isActiveBurger
          })} onClick={(e) => setIsActiveBurger(!isActiveBurger)}>
            <span>MENU</span>
          </div>
        </div>
      </div>

      <div
        className={clsx("fixed top-0 md:pt-[150px] pt-[120px] pb-[50px] h-screen w-screen left-0 bg-gold transition-all duration-500", {
          'opacity-100': isActiveBurger,
          'opacity-0 translate-y-[-110vh]': !isActiveBurger,
        })}>
        <div className={"container h-full flex flex-col xl:items-start items-center relative"}>
          <a href={"tel:+18575766900"} className={"transition-colors md:hidden mb-[50px] underline"}>
            +1 857 576-6900
          </a>
          <ul className={"flex flex-col xl:items-start items-center gap-[20px] grow mb-auto w-fit"}>
            {navItems.map((item, index) => (
              <li key={index}
                  className={"2xl:text-[50px] md:text-[40px] text-[32px] group 2xl:hover:text-[100px] xl:hover:text-[65px] w-fit text-black transition-all duration-500 leading-tight font2 origin-left w-fit"}>
                <Link className={"flex items-center"} to={item.to} onClick={() => setIsActiveBurger(false)}>
                  {item.name}
                  <Arrow
                    classes={"fill-black xl:block hidden group-hover:scale-100 group-hover:delay-[400ms] scale-0 transition-all duration-500  origin-left translate-y-[9px] ml-[40px]"}
                    width={'75'} height={'13'}/>
                </Link>

                <img src={item.img}
                     className={"fixed w-[520px] xl:block hidden pointer-events-none object-cover h-full top-0 right-0 z-10 opacity-0 group-hover:opacity-100 group-hover:delay-0 delay-300 transition-all duration-700"}
                     alt=""/>
              </li>
            ))}
          </ul>

          <div className={"flex md:w-full pt-[15px] justify-between md:flex-row flex-col-reverse  xl:text-left text-center md:items-end items-center  relative z-[20]"}>
            <div className={""}>
              30 Webster St <br/>
              Brookline, MA 02446<br/>
              United States of America
            </div>
            <div className={"md:mb-0 mb-[30px]"}>
              <Button label={'Book Now'} color={"white"} noAnimate={true}/>
            </div>
          </div>


        </div>
      </div>
      {/*<div*/}
      {/*  className={clsx("mx-auto  w-full flex gap-2 justify-between items-center", {'container': transparent})}>*/}
      {/*  <nav*/}
      {/*    className={clsx('flex xl:static  xl:pointer-events-auto z-40 point-event-none  fixed top-0 left-0 xl:w-fit w-full xl:flex-row flex-col items-center xl:pt-0 pt-[120px] top gap-[10px] transition-all duration-500', {*/}
      {/*      "min-h-[100vh] opacity-100 bg-red px-[15px]": isActiveBurger,*/}
      {/*      "sm:min-h-[43px] min-h-[43px] rounded-base xl:opacity-100 opacity-0  xl:translate-y-0 translate-y-[-120%]": !isActiveBurger*/}
      {/*    })}>*/}
      {/*    {navItems.map((item, index) => (*/}
      {/*      <a onClick={(e) => handleClickLink(e, item.to)} key={index} href={`#${item.to}`}*/}
      {/*         className={clsx("tag black mobFull", {'active': isActiveBurger})}>*/}
      {/*        {item.name}*/}
      {/*      </a>*/}
      {/*    ))}*/}


      {/*    <div*/}
      {/*      className={"w-full grow mt-[5vh] h-full  flex-col justify-end items-center mt-auto pb-4 container xl:hidden flex"}>*/}
      {/*      <Socials/>*/}
      {/*      <div className={"py-[15px]"}></div>*/}
      {/*    </div>*/}
      {/*  </nav>*/}

      {/*  <div className={'flex items-center justify-between xl:w-fit w-full '}>*/}
      {/*    <div className={"flex flex-col gap-[10px]"}>*/}
      {/*      <Link to={'/form'} className='tag red mobSm'>Записаться на обучение</Link>*/}
      {/*      <a href={'/#contacts'} className='tag red mobSm'>оставить заявку</a>*/}
      {/*    </div>*/}
      {/*    <div className={'relative z-50 xl:hidden block'}>*/}
      {/*      <Burger active={isActiveBurger} onClick={() => setIsActiveBurger(!isActiveBurger)}/>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*</div>*/}


    </header>
  );
};

export default Header;
