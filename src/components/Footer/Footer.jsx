import React from 'react'
import S from   './footer.module.scss'
const Footer = () => {
 const currentYear = new Date().getFullYear();

  return (
    <footer className={S.footer}>
      <p>
        © {currentYear} Vai na Web & Empower. Todos os direitos reservados. 
        Projeto destinado exclusivamente a fins educativos.
      </p>
    </footer>
  )
}

export default Footer
