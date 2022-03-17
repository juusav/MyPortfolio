import React from "react";
import CardComponent from "../../components/CardComponent";
import styles from "./styles.module.css";

function ProjectsArticle() {
  return (
    <article id="projects" className={styles.projectsContainer}>
      <div className={styles.topContent}>
        <h1 className={styles.mainTitle}>Mis projectos</h1>
        
        <div className={styles.projectsMain}>
          <div className={styles.projectsContent}>
            <CardComponent
              image="https://jusapp.s3.eu-central-1.amazonaws.com/netflix.jpg"
              alt="netflix clone"
            />
            <CardComponent
              image="https://jusapp.s3.eu-central-1.amazonaws.com/jusavcoin2.jpg"
              alt="coin market"
            />
          
            <CardComponent
              image="https://jusapp.s3.eu-central-1.amazonaws.com/amazonimage.jpg"
              alt="amazon clone"
            />
            <CardComponent
              image="https://jusapp.s3.eu-central-1.amazonaws.com/teslaimage.jpg"
              alt="tesla home page"
            />
            <CardComponent
              image="https://jusapp.s3.eu-central-1.amazonaws.com/tictactoe.jpg"
              alt="tictactoe game"
            />
            <CardComponent
              image="https://jusapp.s3.eu-central-1.amazonaws.com/tiktokimage.jpg"
              alt="tiktok clone"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectsArticle;
