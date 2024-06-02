import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillsContainer}>
        <SkillsCard
          src={lawnmowing}
          link="https://dev-from-cbd.github.io/Lawn-Care-Website-JS-HTML-CSS"
          h3="Lawn Mowing"
          p="Hire grass care PROs"
        />
      </div>
    </section>
  );
}

export default Skills;
