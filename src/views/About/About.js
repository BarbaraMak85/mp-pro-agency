import React from "react";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.wrapperAbout}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}></div>
        <div className={styles.aboutText}>
          <h1 className={styles.aboutName}>
            Patrycja <br></br>
            <span className={styles.aboutSurname}>Grabarska</span>
          </h1>
          <p className={styles.aboutParagraph}>
            W toku edukacji zdobyłam wiedzę zgodną z klasyczną teorią
            komunikacji, marketingu oraz medioznawstwa. Jednak zdawałam sobie
            sprawę, że sama teoria nie pozwoli mi w pełni działać w marketingu,
            a co dopiero funkcjonować w środowisku biznesowym, dlatego od
            początku stawiałam na zdobycie doświadczenia. Pracowałam dla różnych
            instytucji oraz firm, zajmując się wszystkim co było związane z
            komunikacją marketingową. Tworzyłam strategie, pisałam artykuły,
            kontaktowałam się z mediami, obsługiwałam klientów, organizowałam
            wydarzenia branżowe. Dzięki temu nauczyłam się prowadzić projekty,
            zarządzać, budować relacje oraz odnajdywać się w sytuacjach
            kryzysowych Teraz dzielę się wiedzą tutaj - w miejscu stworzonym
            przeze mnie.
          </p>
        </div>
      </div>
      <div className={styles.aboutImageLine}></div>
    </div>
  );
};

export default About;
