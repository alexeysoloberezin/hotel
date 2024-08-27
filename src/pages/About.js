import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import AboutBlock from "../blocks/AboutBlock";
import NonPerfectGrid from "../components/core/NonPerfectGrid";
import OurServices from "../blocks/OurServices";
import CardImageGrid from "../components/core/CardImageGrid";
import BgImage from "../blocks/BgImage";
import Animation from "../components/Animation";
import ContactUs from "../blocks/ContactUs";

function AboutUs(props) {
  return (
    <>
      <MainBlockTemplate
        title={'About Us'}
        image={'/aboutBg.jpg'}
        description={'A culinary oasis of art and flavor'}
      >
      </MainBlockTemplate>


      <AboutBlock imgTemplate={'/aboutImg{**}.jpg'}></AboutBlock>

      <div className={"bg-purple lg:py-[200px] py-[100px] text-black"}>
        <div className="container">
          <div className={"grid lg:grid-cols-[33%_55%] mb-[50px]"}>
            <Animation className={'text-[50px] leading-snug font2 '}>Our&nbsp;Hotel</Animation>
            <Animation className={"pt-[8px]"}>IRIS HOTEL Boston is ideally located in the picturesque neighborhood of
              Brookline, just minutes from
              the
              city’s main attractions. We offer 120 modern and elegant suites, equipped with all the amenities for your
              comfort.
            </Animation>
          </div>

          <NonPerfectGrid imgTemplate={'/our{**}.jpg'}/>
        </div>
      </div>

      <OurServices/>
      <CardImageGrid
        title={'Explore Boston'}
        text={'Our location is perfect for exploring Boston. Here are some places you might want to visit during your stay:'}
        data={[
          {
            img: "/explore1.jpg",
            title: 'Museum of Fine Arts',
            text: "One of the largest art museums in the United States, featuring collections from ancient to contemporary art.",
            link: "https://www.mfa.org/",
            linkText: "Visit the Museum of Fine Arts"
          },
          {
            img: "/explore2.jpg",
            title: 'Boston University and College',
            text: " Proximity to renowned educational institutions where you can enjoy architectural and cultural landmarks.",
            link: "https://www.bu.edu/",
            linkText: "Learn about Boston University"
          },
          {
            img: "/explore3.jpg",
            title: 'Faneuil Hall Marketplace',
            text: "A historic market and event center known for its street performers and lively atmosphere.",
            link: "https://www.faneuilhallmarketplace.com/",
            linkText: "Explore Faneuil Hall Marketplace"
          },
          {
            img: "/explore4.jpg",
            title: 'New England Aquarium',
            text: "An engaging destination for the whole family with marine life exhibits and interactive displays.",
            link: "https://www.neaq.org/",
            linkText: "Check out the New England Aquarium"
          },
          {
            img: "/explore5.jpg",
            title: 'The Boston Public Library',
            text: "One of the largest public libraries in the United States. The library building is one of the finest examples of neo-Renaissance architecture in America",
            link: "",
            linkText: ""
          }
        ]}
      />

      <BgImage img={'/phil.jpg'}>
        <Animation>
          <div className={"lg:text-[100px] text-[50px] font2 leading-[1.1] text-center"}>Our <br className={"md:hidden"}/> Philosophy</div>
          <div className={"max-w-[485px] mx-auto mt-[15px] text-center"}>At IRIS HOTEL Boston, we strive to create an atmosphere of comfort and relaxation. Our friendly and
            professional staff are ready to assist with any requests and make your stay as enjoyable as possible.
          </div>
        </Animation>
      </BgImage>

      <ContactUs />
    </>
  );
}

export default AboutUs;