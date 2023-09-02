import { Header } from "../../components/Header/Header";
import { BodySolucoes } from "../../components/BodySolucoes/BodySolucoes";
import { Footer } from "../../components/Footer/Footer";
import imgRevisoesBreves from "../../assets/imgRevisoesBreves.svg"

export const paragrafoRevisoes = "A ideia com essas revisões breves é fazer com que o usuário ao inves de abrir diretamente um chamado, tenha uma série de perguntas técnicas e recomendações para fazer no veiculo para indentificar um possivel simples problema, com isso, vamos fazer com que um simples serviço que pode ser feito por uma pessoa física seja realizado, ao inves de ser chamado um guincho desnecessariamente."

export const RevisoesBreves = () => {
    return(
        <>
        <Header RemoverInput />
        <BodySolucoes titulo= {"Revisões Breves"} img= {imgRevisoesBreves} texto= {paragrafoRevisoes} descricao="Imagem de alguém fazendo revisão no carro" />
        <Footer />
        </>
    )
}