import styled from "styled-components"

export const StyledFooter = styled.footer`
    background-color: #000000;
    width: 100vw;
    padding-bottom: 26px;
`
export const StyledParagraphFooter = styled.p`
    color: #FFFFFF;
    font-family: 'Open Sans';
    font-size: 13px;
    font-weight: 300;
    padding: 10px 40px;
    padding-bottom: 15px;
    width: 550px;
    
`

export const StyledAFooter = styled.a`
    text-decoration: none;
    font-family: 'Open Sans';
    padding: 0 40px;
    margin-left: 40px;
    border-radius: 10px;
    background-color: #000000;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
&:hover {
    background-color: #FFFFFF;
    color: #000000;
    border: 2px solid #000000;
}
`