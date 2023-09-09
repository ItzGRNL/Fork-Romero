import styled from "styled-components";

export const StyledBodyRevisoes = styled.body`
    width: 100%;
`

export const StyledH1BodyRevisoes = styled.h1`
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

export const StyledImgBodyRevisoes = styled.img`
    max-width: 100%;

@media (min-width: 768px) {
    width: 70vw;
}

@media (min-width: 1920px) {
    height: 45vh;
}
`
export const StyledDivBodyRevisoes = styled.div`
    display: grid;
    justify-items: center;
    padding: 0 80px;

@media (min-width: 320px) {
    padding: 0 20px;
}
`

export const StyledTagPBodyRevisoes = styled.p`
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 300;
    padding-top: 35px;
    padding-bottom: 55px;
    width: 90%;

@media (min-width: 320px) {
    font-size: 16px;
    padding-bottom: 10vh;
}
    
@media (min-width: 375px) {
    font-size: 17px;
    padding-bottom: 10.3vh;
}
    
@media (min-width: 425px) {
    padding-bottom: 9.7vh;
}
    
    @media (min-width: 768px) {
    padding-bottom: 10vh;
    }

@media (min-width: 1024px) {
    font-size: 24px;
    padding-bottom: 10.9vh;
}
    
@media (min-width: 1440px) {
    font-size: 25px;
    padding-bottom: 6.2vh;
}
    
@media (min-width: 1920px) {
    padding-bottom: 3.3vh;
}
`