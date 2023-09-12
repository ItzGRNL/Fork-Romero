import styled from "styled-components"
import Lupa from "../../assets/LupaDePesquisa.svg"

export const StyledHeader = styled.header`
    background-color: #E2E2FF;
    width: 100%;
    height: 10vh;
    padding: 15px 0;

@media (min-width: 1024px) {
    height: 8vh;
}    
`

export const StyledDivHeader = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        padding-top: 7px;
    }
` 

export const StyledInputHeader = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 150px;
    background-image: url(${Lupa});
    background-position: 2%;
    background-repeat: no-repeat;
    border: 1px solid white;
    text-align: center;
    
${(props) =>
props.RemoverInput &&`
    display: none;
`
}

@media (min-width: 320px) {
    display: none;
    
}

@media (min-width: 768px) {
    display: block;
    height: 40px;
}

@media (min-width: 1024px) {
    font-size: 18px;
}
`

export const StyledImgPorto = styled.img`
    width: 100px;
    margin-left: 3vw;

@media (min-width: 1024px) {
    width: 150px;
}

@media (min-width: 768px) {
    width: 120px;
}
`