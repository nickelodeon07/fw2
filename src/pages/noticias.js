import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
export default function noticias() {
  var produtos = [
    {
        id: 1,
        produto: "Cadeira Ergonomica",
        descricao: "Cadeira projetada para oferecer suporte adequado durante longas horas de trabalho, garantindo conforto e postura correta."
    },
    {
        id: 2,
        produto: "Teclado Mecânico",
        descricao: "Teclado mecânico com iluminação RGB personalizável, ideal para gamers e profissionais que buscam maior precisão e conforto."
    },
    {
        id: 3,
        produto: "Monitor 27 polegadas",
        descricao: "Monitor de alta definição com painel IPS, perfeito para edição de fotos, vídeos e jogos, oferecendo cores vibrantes e ângulos amplos."
    },
    {
        id: 4,
        produto: "Mouse Sem Fio",
        descricao: "Mouse sem fio com design ergonômico e sensor de alta precisão, ideal para uso diário em escritório ou para gamers profissionais."
    },
    {
        id: 5,
        produto: "Notebook Ultralight",
        descricao: "Notebook ultraleve com bateria de longa duração, processador potente e tela Full HD, perfeito para quem precisa de mobilidade e desempenho."
    }
]

  return (
    <>
      <Menu />
      
      <Container>Lista
      {produtos.map(produto =>
        <div>
          <p>{produto.produto}</p>
          <p>{produto.descricao}</p>
        </div>
      )}
      </Container> 
      <Footer />
    </>
  );
}
