import styles from "./ProjectsStyles.module.css";
import lawnmowing from "../../assets/lawn-mowing.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={lawnmowing}
          link="https://dev-from-cbd.github.io/Lawn-Care-Website-JS-HTML-CSS"
          h3="Lawn Mowing"
          p="Hire grass care PROs"
        />

        <ProjectCard
          src={lawnmowing}
          link="https://dev-from-cbd.github.io/Lawn-Care-Website-JS-HTML-CSS"
          h3="Lawn Mowing"
          p="Hire grass care PROs"
        />
      </div>
    </section>
  );
}

export default Projects;
