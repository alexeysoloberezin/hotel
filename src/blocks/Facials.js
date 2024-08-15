import React from 'react';
import SectionHeader from "../components/ui/SectionHeader";
import clsx from "clsx";

function FacialItem({imgTemplate, title, price, time, text, index}){
  return (
    <div className={"min-h-[420px] pt-[90px] flex flex-col items-center"} style={{background: `url(${imgTemplate.replace('{**}', index )}) center/cover no-repeat`}}>
      <div className={"flex items-end mb-[5px]"}>
        <span className={"text-[50px]"}>{price}</span>
        <h4>{time}</h4>
      </div>
      <div>
        {title}
      </div>
      <div>{text}</div>
    </div>
  )
}

function Facials(props) {
  const arr = [
    {
      text: `Experience the transformative power of our
Stress Recovery Facial. Emerge feeling
refreshed, renewed, and ready to face the
world with calm and confidence. Treat
yourself to this indulgent escape and
discover the true meaning of relaxation`,
      title: 'Stress Recovery Facial',
      price: '$180',
      time: ' 50min'
    },
    {
      text: `Our Classic Facial not only treats the
surface of your skin but also penetrates
deeply, targeting impurities and promoting
cellular regeneration. Whether you struggle
with dryness, congestion, or dullness, this
comprehensive treatment addresses your
concerns, leaving you with a luminous glow
that radiates from within`,
      title: 'Classique Iris Facial',
      price: '$195',
      time: '50min'
    },
    {
      text: `Discover the reformative effects of our
Microdermabrasion Facial as your skin
undergoes a remarkable journey of renewal
and regeneration. With each session, you notice visible improvements in texture,
tone, and overall radiance, restoring your
confidence and revealing the best version
of yourself.`,
      title: 'HydroDermabrasion',
      price: '$210 ',
      time: '50min'
    },
    {
      text: `Dermaplaning smooths, softens, and
brightens the skin. It reveals healthy skin
beneath dead cell layers and enhances the
absorption of skincare products, while also
preparing the skin for additional
procedures`,
      title: 'Dermaplaning',
      price: '$95 ',
      time: '30min'
    },
    {
      text: `Revitalize your skin with our targeted
techniques and premium skincare products,
designed to address puffiness, dullness,
and dehydration caused by jet lag. In just
30 minutes, you emerge with a luminous
glow and a renewed sense of well-being,
ready to embrace your next adventure with
confidence and vitality`,
      title: '30min',
      price: '$95',
      time: '30min'
    }
  ]

  const grid = 'grid grid-cols-3 gap-[20px]'
  return (
    <div className={"py-[165px] bg-[#710000]"} >
      <div className="container">
        <SectionHeader
          text={'We offer a variety of facial services to suit your individual skin care needs. Our estheticians use only the finest Bioelements products based on trace minerals, essential oils, and plant extracts'}
          color={'white'}
          classText={"max-w-[640px]"}
          title={'Facials'}
        />

        <div className={clsx(grid)}>
          {arr.map((el, index) => (
            <FacialItem
              text={el.text}
              title={el.title}
              time={el.time}
              price={el.price}
              imgTemplate={"/facials_{**}.png"}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facials;
