import styles from "./ProjectsStyles.module.css";
import lawnmowing from "../../assets/lawn-mowing.png";
import dashboard from "../../assets/dashboard.png";
import onlinegame from "../../assets/online-game.png";
import fitnesswebsite from "../../assets/fitness-website.png";
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
          src={dashboard}
          link="https://dev-from-cbd.github.io/dashboard"
          h3="Dashboard"
          p="NDIS Plan Management"
        />

        <ProjectCard
          src={onlinegame}
          link="https://dev-from-cbd.github.io/online-game"
          h3="Online Game"
          p="Text Adventure Game"
        />

        <ProjectCard
          src={fitnesswebsite}
          link="https://dev-from-cbd.github.io/fitness-website"
          h3="Fitness Website"
          p="Body Fit Training"
        />
      </div>
    </section>
  );
}

export default Projects;
