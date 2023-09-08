import styled from "styled-components";

export const StyledBodyCentralSolucoes = styled.body`
    justify-content: center;

`

export const StyledH1CentralSolucoes = styled.h1`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    padding-top: 3%;
@media (min-width: 320px) {
    font-size: 25px;
    padding-top: 8vh;
}

@media(min-width: 1024px) {
    font-size: 30px;
}
`

export const StyledDivCentralSolucoes = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    padding: 18.9vh 0;
@media (min-width: 320px) {
    padding: 19.4vh 0;
}

@media (min-width: 1024px) {
    padding: 20.4vh 0;
}

@media (min-width: 1440px) {
    padding: 20.4vh 0;
}

@media (min-width: 1920px) {
    padding: 17.4vh 0;
}
`

export const StyledTagACentralSolucoes = styled.a`
    padding: 40px;
    width: 15.5em;
    margin: 10px;
    background-color: #00A1FC;
    border-radius: 20px;
    text-decoration: none;
    text-align: center;
    color: #000000;
@media (min-width: 320px) {
    width: 100px;
    padding: 20px;
    font-size: 15px;
}

@media(min-width: 768px) {
    width:160px;
    padding: 20px 50px;
    font-size: 15px;
}

@media (min-width: 1024px) {
    width: 200px;
    padding: 25px 60px;
    font-size: 20px;
}

@media (min-width: 1440px) {
    width: 250px;
    padding: 35px 40px;
}
`