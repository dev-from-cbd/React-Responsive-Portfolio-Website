import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/oleg.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile image of the Web Developer"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Junior
          <br /> Web Developer
        </h1>
        <h2>Oleg Grid</h2>
        <span>
          <a
            href="https://github.com/dev-from-cbd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="linkedIn" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="X.Com" />
          </a>
        </span>
        <p>
          Within just six months of working for your company, you'll see that
          I've developed numerous valuable solutions that significantly benefit
          your business!
        </p>
        <a href={CV} rel="noopener noreferrer">
          <button className={styles.hover} download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
