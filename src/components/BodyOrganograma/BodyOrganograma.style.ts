import styled from "styled-components";

export const StyledDivOrganograma = styled.div`
    display: grid;
    justify-items: center;
    padding: 3% 80px;

@media (min-width: 320px) {
    padding: 3% 0;

}
`
export const StyledH1Organograma = styled.h1`
    font-family: 'Open Sans';
    font-size: 28px;
    font-weight: 300;
`
export const StyledImgOrganograma = styled.img`
    height: 67.3vh;
    width: 100vw;

@media (min-width: 375px) {
    height: 67vh;
}

@media (min-width: 425px) {
    height: 66.5vh;
}

@media (min-width: 768px) {
    height: 61vh;
}

@media (min-width: 1024px) {
    height: 64vh;
}

@media (min-width: 1440px) {
    height: 62vh;
}

@media (min-width: 1920px) {
    height: 56.1vh;
}
`