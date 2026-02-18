import React from "react";

import { Card } from "../../components/Card/Card";
import imgMentoriaCarreira from "../../assets/images/imgMentoriaCarreira.jpg";
import imgCompartilhaExp from "../../assets/images/imgCompartilhaExp.png";
import imgAcompanhamento   from "../../assets/images/imgAcompanhamento.png"
import S from "./mentoria.module.scss";

export default function Mentoria() {
  const cardData = [
      {
        id: 1,
        image: imgMentoriaCarreira
      ,
        title: "Mentoria de Carreira e Emprego",
        description:
          "Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.",
        text: "Quero Participar",
      },
      {
        id: 2,
        image: imgCompartilhaExp,
        title: "Compartilhe Experiência",
        description:
          "AtOriente jovens e profissionais iniciantes em sua área.",
        text: "Quero Participar",
      },
      {
        id: 3,
        image: imgAcompanhamento  ,
        title: "Acompanhamento",
        description:
          "Participe como guia em jornadas de aprendizado e desenvolvimento.",
        text: "Quero Participar",
      },
    ];
  return (
    <section className={S.mentoria}>
      <h1>Mentoria</h1>
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
     
    </section>
  );
}
