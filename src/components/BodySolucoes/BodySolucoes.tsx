import { StyledH1BodySolucoes } from "./BodySolucoes.style"
import { StyledBodySolucoes } from "./BodySolucoes.style"
import { StyledImgBodySolucoes } from "./BodySolucoes.style"
import { StyledDivBodySolucoes } from "./BodySolucoes.style"
import { StyledPBodySolucoes } from "./BodySolucoes.style"

interface BodySolucoesprops{
    titulo: string,
    img: string,
    texto: string,
    descricao?: string,
}

export const BodySolucoes = ({titulo, img, texto, descricao}: BodySolucoesprops) => {
    return(
        <>
        <StyledBodySolucoes>

            <StyledDivBodySolucoes>
                <StyledH1BodySolucoes> {titulo} </StyledH1BodySolucoes>

                <StyledImgBodySolucoes  src={img} alt={descricao} />

                <StyledPBodySolucoes>{texto}</StyledPBodySolucoes>
            </StyledDivBodySolucoes>

        </StyledBodySolucoes>
        </>
    )
}