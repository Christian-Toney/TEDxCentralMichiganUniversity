import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {

  const [speakerComponents, setSpeakerComponents] = useState<React.ReactElement[]>([]);

  useEffect(() => {

    const speakers = [
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
      },
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
      },
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
    const speakerComponents = [];
    for (const speaker of speakers) {

      speakerComponents.push(
        <li key={speaker.name}>
          <a href={speaker.link}>
            <label>{speaker.name}</label>
            <label>{speaker.title}</label>
            <p>{speaker.description}</p>
          </a>
        </li>
      );

    }
    setSpeakerComponents(speakerComponents);

  }, []);

  return (
    <main>
      <section id={styles.title}>
        <h1>The essense of a changing world</h1>
        <p>Enter some text here.</p>
      </section>
      <h1>Meet the students</h1>
      <ul>
        {speakerComponents}
      </ul>
      <h1>...and the pros too!</h1>
      <h1>Featuring songs from the choir</h1>
      <h1>We're live from French Auditorium</h1>
    </main>
  );

}