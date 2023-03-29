import React, { ReactElement, useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {

  const [studentComponents, setStudentComponents] = useState<ReactElement[]>([]);
  const [proComponents, setProComponents] = useState<ReactElement[]>([]);

  useEffect(() => {

    const students = [
      {
        name: "Student Name",
        title: "Student Title",
        description: "Student description. This'll only show when the user hovers over the card.",
        link: "#"
      },
      {
        name: "Student Name",
        title: "Student Title",
        description: "Student description. This'll only show when the user hovers over the card.",
        link: "#"
      },
      {
        name: "Student Name",
        title: "Student Title",
        description: "Student description. This'll only show when the user hovers over the card.",
        link: "#"
      },
      {
        name: "Student Name",
        title: "Student Title",
        description: "Student description. This'll only show when the user hovers over the card.",
        link: "#"
      },
      {
        name: "Student Name",
        title: "Student Title",
        description: "Student description. This'll only show when the user hovers over the card.",
        link: "#"
      },
      {
        name: "Student Name",
        title: "Student Title",
        description: "Student description. This'll only show when the user hovers over the card.",
        link: "#"
      },
    ];
    const studentComponents = [];
    for (const speaker of students) {

      studentComponents.push(
        <li key={speaker.name}>
          <a href={speaker.link} className={styles.speaker}>
            <h1 className={styles.name}>{speaker.name}</h1>
            <h2 className={styles.title}>{speaker.title}</h2>
            <p>{speaker.description}</p>
          </a>
        </li>
      );

    }
    setStudentComponents(studentComponents);

    const pros = [
      {
        name: "TBD",
        title: "TBD",
        description: "TBD",
        link: "#"
      },
      {
        name: "TBD",
        title: "TBD",
        description: "TBD",
        link: "#"
      }
    ];
    const proComponents = [];
    for (const speaker of pros) {

      proComponents.push(
        <li key={speaker.name}>
          <a href={speaker.link}>
            <h1>{speaker.name}</h1>
            <h2>{speaker.title}</h2>
            <p>{speaker.description}</p>
          </a>
        </li>
      );

    }
    setProComponents(proComponents);

  }, []);

  return (
    <main>
      <section id={styles.title}>
        <h1>The essense of a changing world</h1>
        <p>Enter a sub-description here.</p>
      </section>
      <h1>Meet the students</h1>
      <ul className={styles.speakers}>
        {studentComponents}
      </ul>
      <h1>...and the pros too!</h1>
      <ul>
        {proComponents}
      </ul>
      <h1>Featuring songs from the choir</h1>
      <p>[Put an image and description of the choir here. If they have a website, link to it.]</p>
      <h1>We're live from French Auditorium</h1>
      <p>[Put the address and a button to buy tickets here.]</p>
    </main>
  );

}