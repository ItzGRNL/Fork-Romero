import { paragrafo1, paragrafo2 } from "../../pages/SolucaoPorto/SolucaoPorto"
import { StyledDivPagPrincipal } from "./BodyPagPrincipal.style"
import { StyledBodyPagPrincipal } from "./BodyPagPrincipal.style"
import { StyledH1PagPrincipal } from "./BodyPagPrincipal.style"
import { StyledParagraphPagPrincipal } from "./BodyPagPrincipal.style"

export const BodyPagPrincipal = () => {
    return(
        <>
        <StyledBodyPagPrincipal>

             <StyledDivPagPrincipal> 
               <StyledH1PagPrincipal>Solução Porto</StyledH1PagPrincipal>

               <StyledParagraphPagPrincipal>{paragrafo1}</StyledParagraphPagPrincipal>
               <StyledParagraphPagPrincipal>{paragrafo2}</StyledParagraphPagPrincipal>
               <iframe src="https://www.youtube.com/embed/F4O96O1h_RY?si=rk-7Hna38Dvpuy9N" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </StyledDivPagPrincipal>
        </StyledBodyPagPrincipal>
        </>
    )                                       
}