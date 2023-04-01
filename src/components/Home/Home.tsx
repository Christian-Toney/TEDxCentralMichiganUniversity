import React from "react";
import styles from "./Home.module.css";

export default function Home() {

  return (
    <main>
      <section id={styles.title}>
        <p>The Central Michigan University Student Government Association presents</p>
        <h1>The essense of a changing world</h1>
      </section>
      <section id={styles.instruction}>
        <p>We're out of tickets this semester, but don't fret: you can watch the stream when we're live!</p>
        <section>
          <button disabled>Watch the livestream</button>
        </section>
      </section>
      <section id={styles.speakers}>
        <section>
          <p>Featuring a range of perspectives from students and professionals</p>
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
        <p>We're live in the French Auditorium on </p>
      </section>
    </main>
  );

}