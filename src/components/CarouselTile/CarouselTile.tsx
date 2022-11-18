import React, { useRef, useState, useEffect } from "react";
import "../carouselTile/carousel_tile.scss";
import Squiggle from "../../images/squiggle.svg";
import {StyledTileContainer} from "./CarouselTile.styles"

type CarouselProps = {
  info: string[] | number[];
  index: number;
  scrollPosition:number; 
}

const CarouselTile = ({ info, index, scrollPosition }:CarouselProps) => {
  const [active, setActive] = useState<boolean>(false);
  const tileContainerRef = useRef<HTMLInputElement>(null);
  const gap:number = 24;

  useEffect(() => {
    const width:number = tileContainerRef.current!.getBoundingClientRect().width;
    const isActive = index * (width + gap) === scrollPosition;
    setActive(isActive);
  }, [scrollPosition]);

  return (
// 
<StyledTileContainer  isActive={true}  ref={tileContainerRef}></StyledTileContainer>

    // <div
    //   className={`tile-container ${active && "active"}`}
    //   ref={tileContainerRef}
    //   style={{ marginRight: gap }}
    // >
    //   {/* EYEBROWS */}
    //   <div className="tile-container__eyebrow-container">
    //     <h4 className="tile-container__eyebrow-container__eyebrow-one">
    //       {info.eyebrowOne}
    //     </h4>
    //     <h4 className="tile-container__eyebrow-container__eyebrow-two">
    //       {info.eyebrowTwo}
    //     </h4>
    //   </div>
    //   {/* SQUIGGLE + STAY */}
    //   <div className="tile-container__label-container">
    //     <img
    //       src={Squiggle}
    //       alt="squiggle"
    //       className="tile-container__label-container__squiggle"
    //     />
    //     <h4 className="tile-container__label-container__type">{info.label}</h4>
    //   </div>
    //   {/* IMAGE */}

    //   <div className="tile-container__image-container">
    //     <img
    //       src={info.image}
    //       alt="Idlerocks"
    //       className="tile-container__image-container__image"
    //     />
    //   </div>

    //   {/* TITLE */}
    //   <div className="tile-container__title">
    //     <h1 className="tile-container__title__header">{info.title}</h1>
    //     <h2 className="tile-container__title__subheader">{info.location}</h2>
    //   </div>
    // </div>
  );
};

export default CarouselTile;
