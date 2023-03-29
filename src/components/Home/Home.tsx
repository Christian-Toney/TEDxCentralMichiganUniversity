import React from "react";
import styles from "./Home.module.css";

export default function Home() {

  return (
    <main>
      <section id={styles.title}>
        <h1>The essense of a changing world</h1>
        <p>Enter a sub-description here.</p>
      </section>
      <section>
        <section>
          <h1>Speakers</h1>
          <p>From students to professionals, there </p>
        </section>
        <ul>
          <li>
            <img src="/people/Anyah.jpg" />
          </li>
          <li>
            <img src="/people/Glenn.jpg" />
          </li>
          <li>
            <img src="/people/Jana.jpg" />
          </li>
          <li>
            <img src="/people/Joseph.jpg" />
          </li>
          <li>
            <img src="/people/Joseph.jpg" />
          </li>
          <li>
            <img src="/people/Tiffany.jpg" />
          </li>
        </ul>
      </section>
      <section>

      </section>
    </main>
  );

}