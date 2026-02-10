import S from "./home.module.scss";
import Banner from "../../assets/images/banner.png";
import Button from "../../components/Botao/Botao";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className={S.main}>
        <section className={S.info}>
          <h1>Projetos Sociais que transformam</h1>
          <p>
            Conectamos sua empresa com projetos sociais impactantes. Juntos,
            criamos mudanças reais na comunidade.
          </p>
          <Button text={"Cadastrar Empresa ➔"} className={S.button} />
          <section className={S.infoDados}>
            <article>
              <h2>500+</h2>
              <p>Empresas Voluntárias</p>
            </article>
            <article>
              <h2>1.2K+</h2>
              <p>Projetos Realizados</p>
            </article>
            <article>
              <h2>50K+</h2>
              <p>Vidas Impactadas</p>
            </article>
          </section>
        </section>
        <img
          src={Banner}
          alt="Imagem de mãos segurando o globo terrestre representando a responsabilidade social e ambiental."
        />
      </main>
      <Footer />
    </>
  );
}
