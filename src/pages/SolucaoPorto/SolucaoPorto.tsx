import { Header } from "../../components/Header/Header";
import { BodyPagPrincipal } from "../../components/BodyPagPrincipal/BodyPagPrincipal";
import { Footer } from "../../components/Footer/Footer";

export const paragrafo1 = "De acordo com as informações passadas pela equipe Porto, avaliamos uma carência na qualidade que é passada as informações pelo assegurado, sendo assim, tivemos a ideia de fazer um sistema que fácilitar com que o assegurado não tenha que passar muitas informações, com isso, será poupado um tempo do assegurado e garantido que as informações sejam adquiridas de forma correta, partindo deste ponto vamos implantar uma grande base de dados que fará com que todas as informações básicas do veiculo sejam recebidas antes que haja necessidade de apoio. Claramente, que não é possivel ter todas as informações, então, para que tenha todas as informações possiveis para que o chamado correto seja estabelecido, vamos fazer algumas perguntas que são muito dificeis de ser detectadas, por exemplo: peso adicional, quantidade de eixos, entre outros."

export const paragrafo2 = "Já no Front-end, vamos implementar uma interface rica mais simplista para que o assegurado não se perca na hora de acionar a seguradora, vamos adicinar alguns botões que faram o auxilio do assegurado durante o chamado que será administrado por alguns métodos artificiais, que por sua vez, teram todas as informações necessaria para fazer a melhor escolha de ajuda para a determinada ocasião."

export const SolucaoPorto = () => {
    return(
        <>
        <Header />
        <BodyPagPrincipal />
        <Footer />
        </>
    )
}