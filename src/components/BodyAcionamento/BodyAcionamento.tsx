import { StyledH1BodyAcionamento } from "./BodyAcionamento.style"
import { StyledBodyAcionamento } from "./BodyAcionamento.style"
import { StyledImgBodyAcionamento } from "./BodyAcionamento.style"
import { StyledDivBodyAcionamento } from "./BodyAcionamento.style"
import { StyledTagPBodyAcionamento } from "./BodyAcionamento.style"

interface BodyAcionamentoprops{
    titulo: string,
    img: string,
    texto: string,
    descricao?: string,
}

export const BodyAcionamento = ({titulo, img, texto, descricao}: BodyAcionamentoprops) => {
return(
        <>
        <StyledBodyAcionamento>

            <StyledDivBodyAcionamento>
                <StyledH1BodyAcionamento> {titulo} </StyledH1BodyAcionamento>

                <StyledImgBodyAcionamento  src={img} alt={descricao} />

                <StyledTagPBodyAcionamento>{texto}</StyledTagPBodyAcionamento>
            </StyledDivBodyAcionamento>

        </StyledBodyAcionamento>
        </>
    )
}