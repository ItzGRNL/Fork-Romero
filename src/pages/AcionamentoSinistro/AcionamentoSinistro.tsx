import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import imgAcionamentoSinistro from "../../assets/imgAcionamentoSinistro.svg"
import { BodyAcionamento } from "../../components/BodyAcionamento/BodyAcionamento";

export const paragrafoAcionamentoS = "Nesta parte, introduziremos algumas perguntas que são muito difíceis de serem indentificadas, seram poucas perguntas e bem objetivas, até porque neste momento o assegurado não gostaria de ter que responder uma série muito grande de questionamentos, mas, por trás destas simples perguntas, estará sendo trabalhado uma grande base de dados que fará com que a melhor escolha seja feita."

export const AcionamentoSinistro = () => {
    return(
        <>
        <Header RemoverInput/>
        <BodyAcionamento titulo = {"Acionamento de Sinistro"} img = {imgAcionamentoSinistro} texto = {paragrafoAcionamentoS} descricao= "Imagem de uma pessoa ligando para algúem/algum lugar"/>
        <Footer />
        </>
    )
}