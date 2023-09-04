import { StyledH1CentralSolucoes } from "./BodyCentralSolucoes.style"
import { StyledDivCentralSolucoes } from "./BodyCentralSolucoes.style"
import { StyledBodyCentralSolucoes } from "./BodyCentralSolucoes.style"
import { StyledTagACentralSolucoes } from "./BodyCentralSolucoes.style"


export const BodyCentralSolucoes = () => {
    return(
        <>
        <StyledBodyCentralSolucoes>
            <StyledH1CentralSolucoes>Central de Soluções</StyledH1CentralSolucoes>

            <StyledDivCentralSolucoes>
                <StyledTagACentralSolucoes href="">Acionar Sinistro</StyledTagACentralSolucoes>
                <StyledTagACentralSolucoes href="">Ajuda</StyledTagACentralSolucoes>
                <StyledTagACentralSolucoes href="">Revisões Breves</StyledTagACentralSolucoes>
                <StyledTagACentralSolucoes href="">Reportar Problema</StyledTagACentralSolucoes>
            </StyledDivCentralSolucoes>
        </StyledBodyCentralSolucoes>
        </>
    )
}