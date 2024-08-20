import React from 'react';
import MainBlockTemplate from "../components/core/MainBlockTemplate";
import Nectar from "../blocks/Nectar";
import Grid121 from "../components/core/Grid121";
import SectionHeader from "../components/ui/SectionHeader";
import BarMenu from "../blocks/BarMenu";
import BgImageBlock from "../blocks/BgImageBlock";

function Bar(props) {
  return (
    <div>
      <MainBlockTemplate
        title={'Nectar Bar'}
        image={'/barBg.jpg'}
        description={'A culinary oasis of art and flavor'}
      >
      </MainBlockTemplate>

      <Nectar/>

      <div className={"bg-[#0E4840] text-white md:py-[200px] py-[100px]"}>
        <div className="container">
          <Grid121
            imgTemplate={'nec{**}.png'}
          />
        </div>
      </div>

      <BarMenu />

      <BgImageBlock
        hideBtn={true}
        noWebp={true}
        bg={'/barBg2.jpg'}
      >
        <h1>Each sip here </h1>
        <div className={"max-w-[250px] mt-[15px]"}>is a little journey into the world of flavor and enjoyment.</div>
      </BgImageBlock>
    </div>
  );
}

export default Bar;