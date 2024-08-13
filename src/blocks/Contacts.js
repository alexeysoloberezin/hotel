import React from 'react';
import FaqItem from "../components/ui/FaqItem";

function ContactsBlock(){
  return (
    <>
      <h2 className={"mb-[20px]"}>Getting here</h2>
      <p className={"mb-[20px]"}>30 Webster St, Brookline, MA 02446, United States</p>
      <a href="tel:+18575766900" className={"mb-[50px] block underline"}>+18575766900</a>
    </>
  )
}

function Contacts(props) {

  return (
    <div className={"bg-dark lg:py-[200px] py-[100px]"}>
      <div className="container flex lg:flex-row flex-col-reverse lg:gap-[90px] gap-[20px]">
        <div className={"lg:w-[35%] shrink-0"}>
          <div data-aos="fade-up" className={"lg:block hidden"}>
            <ContactsBlock/>
          </div>

          <FaqItem
            delay={'150'}
            title={'Parking'}
            icon={'/icon_faq1.png'}
          >
            <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>
              <p>Distance from Property: 7.9 Miles</p>
              <div> Phone Number: <a href="tel:+18002356426">+1 800-235-6426</a></div>
              <a href="#" className={"underline"}>Visit Website</a>

              <div className={"mt-[20px]"}>Alternate Airport Transportation:</div>
              <div>MBTA- Green Lind C- Train, Coolidge corner; fee: 2.00 USD (one way)</div>
            </div>
          </FaqItem>
          <FaqItem
            delay={'300'}
            title={'Boston Logan International Airport'}
            icon={'/icon_faq2.png'}
          >
            <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>
              <p>Distance from Property: 7.9 Miles</p>
              <div> Phone Number: <a href="tel:+18002356426">+1 800-235-6426</a></div>
              <a href="#">Visit Website</a>

              <div className={"mt-[20px]"}>Alternate Airport Transportation:</div>
              <div>MBTA- Green Lind C- Train, Coolidge corner; fee: 2.00 USD (one way)</div>
            </div>
          </FaqItem>
          <FaqItem
            delay={"450"}
            title={'T F Green Airport'}
            icon={'/icon_faq2.png'}
          >
            <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>
              <p>Distance from Property: 7.9 Miles</p>
              <div> Phone Number: <a href="tel:+18002356426">+1 800-235-6426</a></div>
              <a href="#">Visit Website</a>

              <div className={"mt-[20px]"}>Alternate Airport Transportation:</div>
              <div>MBTA- Green Lind C- Train, Coolidge corner; fee: 2.00 USD (one way)</div>
            </div>
          </FaqItem>
          <FaqItem
            delay={"600"}
            title={'Manchester-Boston Regional Airport'}
            icon={'/icon_faq2.png'}
          >
            <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>
              <p>Distance from Property: 7.9 Miles</p>
              <div> Phone Number: <a href="tel:+18002356426">+1 800-235-6426</a></div>
              <a href="#">Visit Website</a>

              <div className={"mt-[20px]"}>Alternate Airport Transportation:</div>
              <div>MBTA- Green Lind C- Train, Coolidge corner; fee: 2.00 USD (one way)</div>
            </div>
          </FaqItem>
          <FaqItem
            delay={"750"}
            title={'Other Transportation'}
            icon={'/icon_faq3.png'}
          >
            <div className={"flex flex-col md:gap-[10px] gap-[5px]"}>
              <p>Distance from Property: 7.9 Miles</p>
              <div> Phone Number: <a href="tel:+18002356426">+1 800-235-6426</a></div>
              <a href="#">Visit Website</a>

              <div className={"mt-[20px]"}>Alternate Airport Transportation:</div>
              <div>MBTA- Green Lind C- Train, Coolidge corner; fee: 2.00 USD (one way)</div>
            </div>
          </FaqItem>
        </div>
        <div className={"w-full"} data-aos="fade-up" data-aos-delay="800">
          <div className={"lg:hidden"}>
            <ContactsBlock/>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.07429109242!2d-71.12498232340367!3d42.34093943630878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379be3edbe67d%3A0x4b233be88bcacf73!2zMzAgV2Vic3RlciBTdCwgQnJvb2tsaW5lLCBNQSAwMjQ0Niwg0KHQqNCQ!5e0!3m2!1sen!2sid!4v1723112850025!5m2!1sen!2sid"
            allowFullScreen="" loading="lazy"
            className={"aspect-video w-full lg:min-h-[550px] md:min-h-[400px] min-h-[250px]"}
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;