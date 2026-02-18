import React from "react";

import S from "./usuario.module.scss";

export default function Usuario() {
  return (
    <section className={S.usuario}>
      <div className={S.containerUsuario}>
        <img
          src="https://avatars.githubusercontent.com/u/64041932?v=4"
          alt="Foto de Perfil"
          className={S.fotoPerfil}
        />

        <div className={S.info}>
          <h2 className={S.nome}>Luiz de Lima</h2>
          <p className={S.status}>Voluntário Ativo</p>

          <p className={S.descricao}>
            Vejo a tecnologia como um meio de gerar impacto real: simplificar
            processos, conectar pessoas e transformar ideias em soluções
            eficientes.
          </p>

          <address className={S.detalhesContatos}>
            <span>📍 São Paulo, SP</span>
            <span>✉️ llm.luizdelima@gmail.com</span>
            <span>📅 Membro desde setembro 2025</span>
          </address>

          <div className={S.tags}>
            <span className={S.tag}>Educação</span>
            <span className={S.tag}>editor de vídeo</span>
            <span className={S.tag}>Assistência Social</span>
            <span className={S.tag}>Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}
