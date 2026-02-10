import React from "react";
import { Card } from "../../components/Card/Card";

import imgFamilia from "../../assets/images/imgAlimento.jpg";
import ImgPC from "../../assets/images/pc.jpg";
import imgLivros from "../../assets/images/ImgLivros.jpg";
import S from "./doacao.module.scss";
import Footer from "../../components/Footer/Footer";

export default function Doacao() {
  const cardData = [
    {
      id: 1,
      image: imgFamilia,
      title: "Instituto grande família",
      description:
        "Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.",
      text: "Quero Doar",
    },
    {
      id: 2,
      image:imgLivros ,
      title: "Projeto Futuro na Escola",
      description:
        "Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos.",
      text: "Quero Doar",
    },
    {
      id: 3,
      image:ImgPC ,
      title: "Instituto Conecta Jovem",
      description:
        "Doe computadores usados, tablets ou celulares em bom estado para permitir acesso ao mundo digital.",
      text: "Quero Doar",
    },
  ];
  return (
    <section className={S.doacao}>
      <h1>Doação</h1>
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
     
      <Footer/>
    </section>
  );
}
