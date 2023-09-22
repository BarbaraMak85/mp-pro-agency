import React from "react";
import Content from "../../components/navigations/Content/Content";
import styles from "./Home.module.scss";
import { Link } from "react-scroll";
function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_content}>
        <Content claretTitle="Sztuka" />
        <div className={styles.titleHome}>
          <Content claretTitle="komunikacji" />
        </div>
        <p className={styles.homeParagraph}>
          MC pro to firma doradcza specjalizująca się w konsultacjach oraz
          edukacji w obszarze komunikacji i marketingu. Doradzam jak usprawniać
          działania, budować relacje oraz zarządzać przepływem informacji.
        </p>

        <Link
          activeClass={styles.active}
          className={styles.naviagtionList__element}
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p className={styles.homeParagraphContact}>Skontaktujmy się</p>
        </Link>
      </div>
      <div className={styles.home_image}></div>
    </div>
  );
}

export default Home;
