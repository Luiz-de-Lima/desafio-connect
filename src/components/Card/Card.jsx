import React from "react";
import { Button } from "../../components/Botao/Botao";

import S from "./card.module.scss";

export function Card({ image, title, description, text }) {
  return (
    <>
    <article className={S.card}>
      <img src={image} alt={title} className={S.cardImage} />
      <h3>{title}</h3>
      <p>{description}</p>

      <Button text={text} className={S.buttonCard} />
    </article>
    
    </>
  );
}
