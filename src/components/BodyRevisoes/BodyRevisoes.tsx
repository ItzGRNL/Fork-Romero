import { StyledH1BodyRevisoes } from "./BodyRevisoes.style"
import { StyledBodyRevisoes } from "./BodyRevisoes.style"
import { StyledImgBodyRevisoes } from "./BodyRevisoes.style"
import { StyledDivBodyRevisoes } from "./BodyRevisoes.style"
import { StyledTagPBodyRevisoes } from "./BodyRevisoes.style"

interface BodyRevisoesprops{
    titulo: string,
    img: string,
    texto: string,
    descricao?: string,
}

export const BodyRevisoes = ({titulo, img, texto, descricao}: BodyRevisoesprops) => {
    return(
        <>
        <StyledBodyRevisoes>

            <StyledDivBodyRevisoes>
                <StyledH1BodyRevisoes> {titulo} </StyledH1BodyRevisoes>

                <StyledImgBodyRevisoes  src={img} alt={descricao} />

                <StyledTagPBodyRevisoes>{texto}</StyledTagPBodyRevisoes>
            </StyledDivBodyRevisoes>

        </StyledBodyRevisoes>
        </>
    )
}