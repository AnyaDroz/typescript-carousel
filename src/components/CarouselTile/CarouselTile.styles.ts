import styled from "styled-components";

export const StyledTileContainer  = (isActive:boolean) => styled.div`
    position: relative;
    color: #0E1249;
    height: 472px;
    position: relative;
    border-color: #C9CCD7;
    border-style: solid;
    border-width: 1px;
    flex: 1 0 400px;
    scroll-snap-align: start;
`


   
   



//     &__eyebrow-container {
//         position: absolute;
//         left: -24px;
//         top: 42px;
//         display: flex;
//         font-family: "MatterLight";
//         text-transform: uppercase;
//         font-size: 12px;
//         letter-spacing: 0.5px;
//         flex-direction: row;
//         gap: 6px;
//         transform: rotate(90deg);
//     }


//     &__label-container {
//         position: absolute;
//         right: 16px;
//         display: flex;
//         font-family: "Matter";
//         text-transform: uppercase;
//         font-size: 14px;
//         letter-spacing: 0.5px;
//         flex-direction: row;
//         gap: 4px;
//     }



//     &__image-container {
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         height: 100%;
//         width: 100%;
//         margin-top: -250px;
//         margin-left: -200px;
//         clip-path: ellipse(162px 162px);
//         transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);

//         &.active {
//             clip-path: ellipse(400px 400px);
//             margin-top: -237px;
//             transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
//         }


//         &__image {
//             height: 474px;
//             width: 400px;
//             object-fit: cover;
//             object-position: 50% 50%;
//             position: relative;
//         }



//     }

//     &__title {


//         position: absolute;
//         bottom: 12px;
//         padding-left: 16px;
//         transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);




//         &__header {
//             position: relative;
//             font-family: "Matter";
//             text-transform: uppercase;
//             font-size: 24px;
//             letter-spacing: 0.5px;
//             line-height: 32px;
//             margin-top: 24px;
//             margin-bottom: 12px;

//         }

//         &__subheader {
//             transform: translate(0, -4px);
//             color: #CD4614;
//             position: relative;
//             font-family: "Matter";
//             text-transform: uppercase;
//             font-size: 16px;
//             letter-spacing: 0.5px;
//             line-height: 16px;
//             margin: 0px;
//             padding: 0px;
//         }
//     }

// }


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
