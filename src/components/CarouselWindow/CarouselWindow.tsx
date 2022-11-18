import CarouselTile from "../CarouselTile/CarouselTile";
import { StyledCarouselWindow } from "./CarouselWindow.styles";
import Idlerocks from "../../images/idlerocks.png"
import Oakleycourt from "../../images/Oakleycourt.png";
import Cottage from "../../images/Cottage.png";
import Beachfront from "../../images/beachfront.png";
import Treehouse from "../../images/treehouse.png";
import { useRef, useEffect, useState } from "react";

const info: Array<{label: string, title: string, eyebrowOne: string, eyebrowTwo:string, location: string, image: string}> = [
    {
      label: "one",
      title: "the idle rocks",
      eyebrowOne: "hotel",
      eyebrowTwo: "remote",
      location: "St mawes, cornwall",
      image: Idlerocks,
    },
    {
      label: "two",
      title: "Oakley court",
      eyebrowOne: "castle",
      eyebrowTwo: "urban",
      location: "St mawes, cornwall",
      image: Oakleycourt,
    },
    {
      label: "three",
      title: "Berkley Cottage",
      eyebrowOne: "Cottage",
      eyebrowTwo: "remote",
      location: "St mawes, cornwall",
      image: Cottage,
    },
    {
      label: "four",
      title: "Berkley Cottage",
      eyebrowOne: "Cottage",
      eyebrowTwo: "remote",
      location: "St mawes, cornwall",
      image: Beachfront,
    },
    {
      label: "five",
      title: "Berkley Cottage",
      eyebrowOne: "Cottage",
      eyebrowTwo: "remote",
      location: "St mawes, cornwall",
      image: Treehouse,
    },
  ];

const copyArray:Array<{label: string, title: string, eyebrowOne: string, eyebrowTwo:string, location: string, image: string}> = [];
copyArray.push(...info);
for (let i = 0; i < 4; i++) {
  info.push(...info);
}


const CarouselWindow = () => {
    const [tileContent, setTileContent] = useState(info);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //  if (carouselRef.current && carouselRef.current.lastChild) {
    //     carouselRef.current.scrollLeft =
    //       (carouselRef.current.lastChild.getBoundingClientRect().width + 24) * 20;
    //   }}, []);

      function getPosition() {
        if (carouselRef.current) {
        const position: number = carouselRef.current.scrollLeft;
        setScrollPosition(position);
      }}

      // useEffect(() => {
      //   if (carouselRef.current && carouselRef.current.lastChild ) {
      //   const tileWidth: number =
      //     carouselRef.current.lastChild.getBoundingClientRect().width + 24;
      //   const carouselWidth: number =
      //     (carouselRef.current.lastChild.getBoundingClientRect().width + 24) *
      //     copyArray.length;
        
      //   if (
      //     scrollPosition >= copyArray.length * 3 * tileWidth &&
      //     scrollPosition % tileWidth === 0
      //   ) {
      //     carouselRef.current.scrollLeft = scrollPosition - carouselWidth;
      //   } else if (
      //     scrollPosition <= copyArray.length * tileWidth &&
      //     scrollPosition % tileWidth === 0
      //   ) {
      //     carouselRef.current.scrollLeft = scrollPosition + carouselWidth;
      //   }
      // }}, [scrollPosition]);

  return (
        <StyledCarouselWindow ref={carouselRef} 
        onScroll={getPosition}>
            {tileContent.map((item, index) => {
        return (
          <CarouselTile
            key={index}
            index={index}
            info={item}
            scrollPosition={scrollPosition}
          />
        );
      })}
        </StyledCarouselWindow>
  )
}

export default CarouselWindow

