import React from "react";
import { Person } from "../Home/Home";
import styles from "./Profile.module.css";

export default function Profile({person, onClose}: {person: Person, onClose: () => void}) {

  return (
    <section id={styles.profileContainer}>
      <section id={styles.profile}>
        <section id={styles.buttonContainer}>
          <button onClick={onClose}>
            <span className="material-icons">
              close
            </span>
          </button>
        </section>
        <section id={styles.details}>
          <section>
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
          </section>
        </section>
        <section id={styles.bio}>
          {person.bio}
        </section>
      </section>
    </section>
  );

}