import styles from "./ProjectsStyles.module.css";


function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <a href="https://dev-from-cbd.github.io/Lawn-Care-Website-JS-HTML-CSS/">
          <img classNamesrc="" alt="" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
