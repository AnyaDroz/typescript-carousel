import styled from "styled-components";




export const StyledTileContainer = styled.div`
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
  left: -30px;
  top: 64px;
  display: flex;
  font-family: "Matter-Medium";
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
  font-family: "Matter-Medium";
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
  flex-direction: row;
  top: 16px;
  gap: 4px;
`;


type StyledImageContainerProps= {
  active: boolean;
};

export const StyledImageContainer = styled.div<StyledImageContainerProps>(({active})=>`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  margin-top: ${ active ? "-237px" : "-250px"};
  margin-left: -200px;
  clip-path: ${ active ? "ellipse(400px 400px)" : "ellipse(162px 162px)"};
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
`);

type StyledTitleContainerProps = {
  active: boolean
}

export const StyledTitleContainer = styled.div<StyledTitleContainerProps>(({active})=>`
  position: absolute;
  bottom: ${ active ? "-90px" : "12px"};
  padding-left: ${ active ? "0px" : "16px"};
  transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
`);

export const StyledHeader = styled.div`
  position: relative;
  font-family: "Matter-SemiBold";
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
  font-family: "Matter-SemiBold";
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 16px;
  margin: 0px;
  padding: 0px;
`;


export const StyledImage = styled.img`
  height: 474px;
  width: 400px;
  object-fit: cover;
  object-position: 50% 50%;
  position: relative;
`;





