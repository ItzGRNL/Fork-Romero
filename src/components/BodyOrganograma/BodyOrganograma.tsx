import imgOrganograma from "../../assets/Organograma.svg";
import { StyledDivOrganograma } from "./BodyOrganograma.style";
import { StyledH1Organograma } from "./BodyOrganograma.style";
import { StyledBodyOrganograma } from "./BodyOrganograma.style";

export const BodyOrganograma = () => {
    return(
        <>
        <StyledBodyOrganograma>
            <StyledDivOrganograma>
                <StyledH1Organograma>Organograma</StyledH1Organograma>
                <img src={imgOrganograma} alt="Imagem de um organograma feito para o projeto" />
            </StyledDivOrganograma>
        </StyledBodyOrganograma>
        </>
    )
}