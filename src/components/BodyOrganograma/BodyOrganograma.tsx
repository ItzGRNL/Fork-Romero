import imgOrganograma from "../../assets/Organograma.svg";
import { StyledDivOrganograma } from "./BodyOrganograma.style";
import { StyledH1Organograma } from "./BodyOrganograma.style";
import { StyledImgOrganograma } from "./BodyOrganograma.style";


export const BodyOrganograma = () => {
    return(
        <>
        <body>
            <StyledDivOrganograma>
                <StyledH1Organograma>Organograma</StyledH1Organograma>
                <StyledImgOrganograma src={imgOrganograma} alt="Imagem de um organograma feito para o projeto" />
            </StyledDivOrganograma>
        </body>
        </>
    )
}