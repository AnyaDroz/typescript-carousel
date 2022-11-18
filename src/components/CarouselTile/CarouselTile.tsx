import React, { useRef, useState, useEffect } from "react";
import {
  StyledTileContainer, 
  StyledEyebrowContainer, 
  StyledLabelContainer, 
  StyledLabelName, 
  StyledImage, 
  StyledImageContainer, 
  StyledTitleContainer, 
  StyledHeader,
  StyledSubHeader,
  // StyledSquiggle
} from "./CarouselTile.styles"

type CarouselItem = {
  eyebrowOne: string
  eyebrowTwo: string  
  label: string
  title: string
  location: string
  image: string
}

type CarouselProps = {
  info: CarouselItem
  index: number
  scrollPosition:number 
 
}

const CarouselTile = ({ info, index, scrollPosition }:CarouselProps) => {
  const [active, setActive] = useState<boolean>(false);
  const tileContainerRef = useRef<HTMLInputElement>(null);
  const gap:number = 24;

  // useEffect(() => {
  //   if (tileContainerRef.current) {
  //   const width:number = tileContainerRef.current.getBoundingClientRect().width;
  //   const isActive = index * (width + gap) === scrollPosition;
  //   setActive(isActive);
  // }}, [scrollPosition]);

  return (

<StyledTileContainer active={active} ref={tileContainerRef} style={{ marginRight: gap }} >
<StyledEyebrowContainer>
  <div>
  {info.eyebrowOne}
  </div>
  <div>
  {info.eyebrowTwo}
  </div> 
</StyledEyebrowContainer>
  <StyledLabelContainer>
     {/* <StyledSquiggle/> */}
    <StyledLabelName>
      {info.label}
    </StyledLabelName>
  </StyledLabelContainer>
<StyledImageContainer>
    <StyledImage src={info.image} alt="Idlerocks" ></StyledImage>
</StyledImageContainer>
<StyledTitleContainer> 
  <StyledHeader> 
  {info.title}
  </StyledHeader>
  <StyledSubHeader>
  {info.location}
    </StyledSubHeader> 
</StyledTitleContainer>
</StyledTileContainer>
  );
};

export default CarouselTile;
