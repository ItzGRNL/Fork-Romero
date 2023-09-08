import styled from "styled-components";

export const StyledBodyPagPrincipal = styled.body`
    width: 100%;
`

export const StyledDivPagPrincipal = styled.div`
    display: grid;
    justify-items: center;
    padding: 0 80px;

@media (min-width: 320px) {
    padding: 0 20px;
}
`

export const StyledH1PagPrincipal = styled.h1`
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 300;
    padding: 15px 0;

@media (min-width: 320px) {
    font-size: 22px;
}

@media (min-width: 1024px) {
    font-size: 30px;
}

@media (min-width:1440px) {
    font-size: 35px;
}

@media (min-width: 1920px) {
    font-size: 30px;  
} 
`

export const StyledParagraphPagPrincipal = styled.p`
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 300;
    padding-top: 0px;
    padding-bottom: 15px;
    width: 90%;

@media (min-width: 320px) {
    font-size: 11px;
} 

@media (min-width: 425px) {
    font-size: 12px;
}

@media (min-width: 768px) {
    font-size: 14px;
}

@media (min-width: 1024px) {
    font-size: 19px;
}

@media (min-width: 1440px) {
    font-size: 22px;
}

@media (min-width: 1920px) {
    font-size: 17px;
}

`

export const StyledIframePagPrincipal = styled.iframe`
    height: 20vh;

@media (min-width: 320px) {
    width: 90vw;
    height: 16vh;
    margin-bottom: 2.5%;
}

@media (min-width: 375px) {
    margin-bottom: 4%;
    height: 22vh;
}

@media (min-width: 425px) {
    margin-bottom: 3%;
    height: 19vh;
}

@media (min-width: 768px) {
    height: 27.3vh;
}

@media (min-width: 1024px) {
    width: 70vw;
    height: 30vh;
}

@media (min-width: 1440px) {
    margin-bottom: 3.5%;
}

@media (min-width: 1920px) {
    height: 40.3vh;
}
`