import React, { useState } from "react";
import styles from "./styles.module.css";
import { Drawer, Modal } from "@mantine/core";
import { BsGithub, BsPlusSquare } from "react-icons/bs";
import Image from "next/image";

interface cardProps {
  image: string;
  altImage: string;
  logo: string;
  altLogo: string;
  name: string;
  description: string;
  features: string[];
  projectUrl: string;
}
function CardComponent(props: cardProps) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.card} onClick={() => setOpened(true)}>
        <div style={{ display: "flex", backgroundColor: "grey", padding: 10 }}>
          <div
            style={{
              backgroundColor: "#F55E54",
              width: 10,
              height: 10,
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#F9BC0D",
              width: 10,
              height: 10,
              borderRadius: "50%",
              marginLeft: 10,
              marginRight: 10,
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#49C933",
              width: 10,
              height: 10,
              borderRadius: "50%",
            }}
          ></div>
        </div>

        <div className={styles.infoContainer}>
          <div>
            <img
              src={props.image}
              alt={props.altImage}
              className={styles.cardImage}
            />

            <p>{props.description}</p>
          </div>

          <span className={styles.button} title="Ver más">
            <BsPlusSquare className={styles.buttonIcon} />
            Más información
          </span>
        </div>
      </div>

      <Modal
        centered
        opened={opened}
        aria-labelledby="title"
        onClose={() => setOpened(false)}
        className={styles.modal}
        styles={{ modal: { backgroundColor: "#1b1b1b" } }}
      >
        <div className={styles.modalContent}>
          <h1 id="title">{props.name}</h1>
          <h3>Principales características:</h3>
          <ul className={styles.list}>
            {props.features.map((r) => (
              <li key={r}>- {r}</li>
            ))}
          </ul>
          <a
            title="Jusav503"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            href={props.projectUrl}
          >
            <BsGithub className={styles.buttonIcon} />
            Ver proyecto
          </a>
        </div>
      </Modal>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        aria-labelledby="title"
        padding="xl"
        position="bottom"
        size="xl"
        className={styles.drawerContainer}
        styles={{ drawer: { backgroundColor: "#1b1b1b" } }}
      >
        <h1 id="title">{props.name}</h1>
        <div className={styles.drawerContent}>
          <div>
            <h3>Principales características:</h3>
            <ul className={styles.list}>
              {props.features.map((r) => (
                <li key={r}>- {r}</li>
              ))}
            </ul>
          </div>

          <a
            title="Jusav503"
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
            href={props.projectUrl}
          >
            <BsGithub className={styles.buttonIcon} />
            Ver proyecto
          </a>
        </div>
      </Drawer>
    </div>
  );
}

export default CardComponent;
