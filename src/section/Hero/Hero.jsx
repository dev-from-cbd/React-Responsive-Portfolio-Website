import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/oleg.png";
import themeIcon from "../../assets/sun.svg";
import twitterLight from "../../assets/twitter-light.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles["rounded-image"]}
          src={heroImg}
          alt="Profile image of the Web Developer"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Junior
          <br /> Web Developer
        </h1>
        <h2>Oleg Grid</h2>
        <span>
          <a href="https://x.com" target="_blank">
            <img src={twitterLight} alt="X.Com" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
