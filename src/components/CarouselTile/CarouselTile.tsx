import React, { useRef, useState, useEffect, forwardRef, useImperativeHandle} from 'react'

import {
  StyledTileContainer, 
  StyledEyebrowContainer, 
  StyledLabelContainer, 
  StyledImage, 
  StyledImageContainer, 
  StyledTitleContainer, 
  StyledHeader,
  StyledSubHeader,
} from "./CarouselTile.styles"
  import Squiggle from "../../images/squiggle.svg";

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
  ref: any
}

const CarouselTile = forwardRef(({ info, index, scrollPosition}:CarouselProps, ref) => {
  const [active, setActive] = useState<boolean>(false);
  const tileContainerRef = useRef<HTMLInputElement>(null);
  const gap:number = 24;

  useImperativeHandle(ref, ()=>({
    getWidth()
    {
      if (tileContainerRef.current) {
      const width:number = tileContainerRef.current.getBoundingClientRect().width;
      return width;}
    }
  }))
  
useEffect(() => {
    if (tileContainerRef.current) {
    const width:number = tileContainerRef.current.getBoundingClientRect().width;
    const isActive = index * (width + gap) === scrollPosition;
    setActive(isActive);
  }}, [scrollPosition]);
  return (
<StyledTileContainer style={{ marginRight: gap }}
ref={tileContainerRef}>
<StyledEyebrowContainer>
  <div>
  {info.eyebrowOne}
  </div>
  <div>
  {info.eyebrowTwo}
  </div> 
</StyledEyebrowContainer>
  <StyledLabelContainer>
     <img src={Squiggle} alt="Squiggle"/>
      {info.label}
  </StyledLabelContainer>
<StyledImageContainer active={active}>
    <StyledImage src={info.image} alt="Idlerocks" ></StyledImage>
</StyledImageContainer>
<StyledTitleContainer active={active}> 
  <StyledHeader> 
  {info.title}
  </StyledHeader>
  <StyledSubHeader>
  {info.location}
    </StyledSubHeader> 
</StyledTitleContainer>
</StyledTileContainer>
  );
});

export default CarouselTile;
