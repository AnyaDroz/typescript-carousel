
import styled from "styled-components";

export const StyledCarouselWindow = styled.div`
    width: 100vw;
    overflow-x: scroll;
    height: 600px;
    display: flex;
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    scroll-snap-type: x proximity;
    color: red;
    height: 400px;
    width: 200px;
    background-color: aliceblue;
`

