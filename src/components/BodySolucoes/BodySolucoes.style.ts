import styled from "styled-components";

export const StyledBodySolucoes = styled.body`
    width: 100%;
`

export const StyledH1BodySolucoes = styled.h1`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 300;
    padding: 25px 0;

@media (min-width: 320px) {
    font-size: 22px;
}

@media (min-width: 768px) {
    font-size: 24px;
}

@media (min-width: 1024px) {
    font-size: 30px;
}
`

export const StyledImgBodySolucoes = styled.img`
    max-width: 100%;

@media (min-width: 768px) {
    width: 70vw;
}

@media (min-width: 1920px) {
    height: 45vh;
}
`
export const StyledDivBodySolucoes = styled.div`
    display: grid;
    justify-items: center;
    padding: 0 80px;

@media (min-width: 320px) {
    padding: 0 20px;
}
`

export const StyledPBodySolucoes = styled.p`
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 300;
    padding-top: 35px;
    padding-bottom: 55px;
    width: 90%;

@media (min-width: 320px) {
    font-size: 16px;
    padding-bottom: 7.5vh;
}

@media (min-width: 375px) {
    font-size: 17px;
    padding-bottom: 5vh;
}

@media (min-width: 425px) {
    padding-bottom: 7vh;
}

@media (min-width: 768px) {
    padding-bottom: 7.3vh;
}

@media (min-width: 1024px) {
    font-size: 25px;
    padding-top: 6vh;
}

@media (min-width: 1440px) {
    padding-top: 5vh;
    padding-bottom: 4vh;
}

@media (min-width: 1920px) {
    font-size: 20px;
}
`