import React, {useEffect} from 'react';

const SkipperWidget = () => {
    useEffect(() => {
      if (window.initSkipper) {
        window.initSkipper({
          hotelId: "IRIS_HOTEL_BROOKLINE",
          target: "skipper-target",
          isDynamic: true,
          targetIds: ["placeholder-id"],
          targetClasses: ["placeholder-class"],
          fallbackUrl: "",
          style: {
            primaryFont: {
              family: "questrial, sans-serif",
              transform: "uppercase"
            },
            secondaryFont: "questrial, sans-serif",
            primaryColor: "#644FF5",
            accentColor: "#CCBFB3",
            primaryFontColor: "#211A52",
            accentFontColor: "#fff",
            placeholderFontColor: "#fff",
            secondaryFontColor: "#5C4A53",
            primaryBackgroundColor: "#fff",
            primaryBorderColor: "#433E6B",
            secondaryBackgroundColor: "#fff",
            inactiveOpacity: 0.5,
            disabledOpacity: 0.3,
            highlightOpacity: 0.1,
            stateOpacity: 0.4
          }
        });
      }
    }, [])


    return (
      <div>
        <div id="skipper-target"></div>
      </div>
    );
  }
;

export default SkipperWidget;
