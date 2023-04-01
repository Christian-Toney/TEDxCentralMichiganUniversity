import React from "react";
import styles from "./Home.module.css";

export default function Home() {

  return (
    <main>
      <section id={styles.title}>
        <p>The Central Michigan University Student Government Association presents</p>
        <h1>The essense of a changing world</h1>
      </section>
      <section id={styles.speakers}>
        <section>
          <p>Enjoy diverse and engaged perspectives from students and professionals.</p>
        </section>
        <ul>
          <li>
            <button>
              <img src="/people/Anyah.jpg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Glenn.jpg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Jana.jpg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Jessica.jpg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Joseph.jpg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Tiffany.jpg" />
            </button>
          </li>
        </ul>
      </section>
      <section>
        <p>Join us in <b>French Auditorium</b> on April 29, 2023</p>
        <button onClick={() => window.open("https://goo.gl/maps/voGMddKF58xVjPAu8", "_blank")}>Get directions</button>
      </section>
    </main>
  );

}