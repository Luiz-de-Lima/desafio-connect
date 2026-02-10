import React from "react";
import Footer from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";
import imgEmpodera from "../../assets/images/imgEmpodera.jpg";
import imgTecTransforma from "../../assets/images/imgTecTransforma.jpg";
import imgCarreiraPrimeiroEmp from "../../assets/images/imgCarreiraPrimeiroEmp.png";
import S from "./eventos.module.scss";

export default function EventosEP() {
 
  const cardData = [
    {
      id: 1,
      image: imgEmpodera,
      title: "Empoderando Jovens para o Futuro",
      description:
        "Atividade: Palestra motivacional sobre liderança jovem e transformação social.Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.",
      text: "Quero Participar",
    },
    {
      id: 2,
      image: imgTecTransforma,
      title: "Tecnologia que Transforma",
      description:
        "Atividade: Workshop de introdução à programação e inovação digital.Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.",
      text: "Quero Participar",
    },
    {
      id: 3,
      image: imgCarreiraPrimeiroEmp,
      title: "Carreira e Primeiro Emprego",
      description:
        "Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.Impacto: Ajudar jovens a conquistar oportunidades de trabalho.",
      text: "Quero Participar",
    },
  ];
  return (
    <section className={S.eventos}>
      <h1>Eventos e Palestras</h1>
      <div className={S.cardData}>
        {cardData.map((card) => (
          
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              text={card.text}
            />
         
        ))}
      </div>
      <Footer />
    </section>
  );
}
