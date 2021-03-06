import { Burger, Drawer, Image } from "@mantine/core";
import React, { useState } from "react";
import styles from "./styles.module.css";

function NavBar() {
  const [opened, setOpened] = useState(false);
  return (
    <nav className={styles.container}>
      <a href="#inicio">
        <figure className={styles.logoContainer}>
          <Image
            src="https://jusapp.s3.eu-central-1.amazonaws.com/myPixel.png"
            alt="pixel Justice"
            style={{ marginTop: "-5px" }}
          />
        </figure>
      </a>

      <div className="hidden md:block desktopMenu">
        <ul className={styles.desktopMenu}>
          <a href="#inicio">
            <li>Inicio</li>
          </a>
          <a href="#sobre-mi">
            <li>Sobre mí</li>
          </a>
          <a href="#proyectos">
            <li>Proyectos</li>
          </a>
          <a href="#contacto">
            <li>Contacto</li>
          </a>
        </ul>
      </div>

      <div className="block md:hidden mr-5">
        <Burger opened={opened} onClick={() => setOpened(true)} color="white" />
      </div>

      <Drawer
        opened={opened}
        hideCloseButton={true}
        onClose={() => setOpened(false)}
        padding="xl"
        size="70%"
        styles={{
          drawer: {
            backgroundColor: "#1b1b1b",
          },
        }}
      >
        <div className={styles.menuMobile}>
          <ul>
            <a href="#inicio">
              <li>Inicio</li>
            </a>
            <a href="#sobre-mi">
              <li>Sobre mí</li>
            </a>
            <a href="#proyectos">
              <li>Proyectos</li>
            </a>
            <a href="#contacto">
              <li>Contacto</li>
            </a>
          </ul>
        </div>
      </Drawer>
    </nav>
  );
}

export default NavBar;
