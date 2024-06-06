import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <span>
          <img src={checkMarkIcon} alt="Skills" />
          <p>HTML5</p>
        </span>
      </div>
    </section>
  );
}

export default Skills;
