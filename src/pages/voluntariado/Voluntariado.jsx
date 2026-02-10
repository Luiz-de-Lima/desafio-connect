import React from "react";
import Footer from "../../components/Footer/Footer";
import {Card} from '../../components/Card/Card'
import imgReciclagem from "../../assets/images/imgReciclagem.png";
import imgAulasTec from "../../assets/images/imgAulasTec.jpg";
import imgAulasInclusao from "../../assets/images/imgAulasInclusao.jpg";


import S from './voluntariado.module.scss'
export default function Voluntariado() {
  const cardData = [
      {
        id: 1,
        image: imgReciclagem,
        title: "Mutirão de reciclagem",
        description:
          "Coletar materiais recicláveis e orientar sobre descarte consciente.",
        text: "Quero Participar",
      },
      {
        id: 2,
        image:imgAulasTec ,
        title: "Aulas de Tecnologia",
        description:
          "Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.",
         text: "Quero Participar",
      },
      {
        id: 3,
        image:imgAulasInclusao ,
        title: "Instituto Conecta Jovem",
        description:
          "Doe computadores usados, tablets ou celulares em bom estado para permitir acesso ao mundo digital.",
         text: "Quero Participar",
      },
    ];
  return (
    <section className={S.voluntariado}>
      <h1>Voluntariado</h1>
      <div className={S.cardData}>
               {cardData.map((card) => (
              <>
                <Card
                  key={card.id}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  text={card.text}
                />
              
               </>
            ))}
            </div>
           
            <Footer/>
    </section>
  );
}
