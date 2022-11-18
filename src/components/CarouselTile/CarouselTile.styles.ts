import styled from "styled-components";
// import {Squiggle} from "./CarouselTile/squiggle.svg"


type StyledTileContainerProps = {
  active: boolean;
};
// type StyledSquiggleProps = {
//   src: string;
// };

// export const StyledSquiggle = styled.img<StyledSquiggleProps>`
//   width: 100%;
// `;

// StyledSquiggle.defaultProps = {
//   src: Squiggle,
// };


export const StyledTileContainer = styled.div<StyledTileContainerProps>`
  position: relative;
  color: #0e1249;
  height: 472px;
  position: relative;
  border-color: #c9ccd7;
  border-style: solid;
  border-width: 1px;
  flex: 1 0 400px;
  scroll-snap-align: start;
`;

export const StyledEyebrowContainer = styled.div`
  position: absolute;
  left: -24px;
  top: 42px;
  display: flex;
  font-family: "MatterLight";
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
  flex-direction: row;
  gap: 6px;
  transform: rotate(90deg);
`;

export const StyledLabelContainer = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  font-family: "Matter";
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
  flex-direction: row;
  gap: 4px;
`;




export const StyledLabelName = styled.div``;

export const StyledImageContainer = styled.div`
position: absolute;
        top: 50%;
        left: 50%;
        height: 100%;
        width: 100%;
        margin-top: -250px;
        margin-left: -200px;
        clip-path: ellipse(162px 162px);
        transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);

`;


// &.active {
//   clip-path: ellipse(400px 400px);
//   margin-top: -237px;
//   transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
// export const StyledImage = styled.div`
//   height: 474px;
//   width: 400px;
//   object-fit: cover;
//   object-position: 50% 50%;
//   position: relative;
// `;

export const StyledTitleContainer = styled.div`
  position: absolute;
  bottom: 12px;
  padding-left: 16px;
  transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const StyledHeader = styled.div`
  position: relative;
  font-family: "Matter";
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 0.5px;
  line-height: 32px;
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const StyledSubHeader = styled.div`
  transform: translate(0, -4px);
  color: #cd4614;
  position: relative;
  font-family: "Matter";
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 16px;
  margin: 0px;
  padding: 0px;
`;


export const StyledImage = styled.img`
 
`;

// .tile-container {
//     &.active {
//         .tile-container__title {
//             bottom: -90px;
//             padding-left: 0px;
//             transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
//         }

//         .tile-container__image-container {
//             clip-path: ellipse(400px 400px);
//             margin-top: -237px;
//             transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
//         }
//     }
// }


