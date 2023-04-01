import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Profile from "../Profile/Profile";

export interface Person {name: string; title: string; bio: React.ReactElement; src: string;}

export default function Home() {

  const goalDate = new Date(1682789400000);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  useEffect(() => {

    setTimeout(() => setCurrentDate(new Date), 1000);

  }, [currentDate]);

  function addZeroIfNecessary(number: number) {
    
    return `${number < 10 ? "0" : ""}${number}`;

  }

  let timeDifference = (goalDate.getTime() - currentDate.getTime()) / 1000;
  const dayDifference = Math.floor(timeDifference / 86400);
  timeDifference -= dayDifference * 86400;
  const hourDifference = Math.floor(timeDifference / 3600) % 24;
  timeDifference -= hourDifference * 3600;
  const minuteDifference = Math.floor(timeDifference / 60) % 60;
  timeDifference -= minuteDifference * 60;
  const secondDifference = Math.floor(timeDifference % 60);

  const [person, setPerson] = useState<Person | null>(null);
  const people = [
    {
      name: "Anyah Lewis",
      title: "Student",
      src: "/people/Anyah.jpg",
      bio: (
        <>
          <p>
            Anyah Lewis is a graduating senior from Central Michigan University. Majoring in Sociology with a concentration in Youth Studies, and minor in Family Studies; Anyah's involvements include, but are not limited to President of Zeta Phi Beta Sorority, Incorporated, Sigma Kappa Chapter; Ronald E. McNair Scholars Program with published research; and is a student mentor for the Mentor Collective program.
          </p>
          <p>
            Anyah has a passion for community enrichment and is always looking for opportunities to give back. With an affinity toward youth development, Anyah endeavors to live a life of advocacy specifically for minority students. Lewis seeks to find innovative ways to implement resources and tools for young adolescents who've experienced trauma to heal and progress through life.
          </p>
        </>
      )
    },
    {
      name: "Johnathan Glenn",
      title: "Director of Diversity & Inclusion",
      src: "/people/Glenn.jpg",
      bio: (
        <>
          <p>
            Jonathan Glenn is the Director of Diversity & Inclusion/Deputy Title IX Coordinator at Alma College. Prior to joining Alma College, Glenn worked as the Associate Athletic Director with CMU Athletics. In this position he worked with leadership development, student conduct, Title IX, care team reporting, DEI director, and sports administrator for Women's Basketball, Women's Lacrosse, and Wrestling. Glenn also serves as the CMU Football’s team Chaplain.
          </p>
          <p>
            Glenn also worked as an Assistant Director for the Leadership Institute at CMU after working as an Assistant Director in the Multicultural Academic Student Services office. Over the last seven years at Central Michigan University, Glenn has provided trainings on leadership, mentorship, multiculturalism, diversity, equity, and inclusion for several on and off campus organizations. Jonathan has presented for: St. Louis Public Schools, Gratiot County Public Schools, Omega Psi Phi, Florida Gulf Coast University, University of Nevada (Reno), Mid-American Conference, Resurrection Life Church, CMU Athletics, Aludyne Manufacturer, and several local leadership conferences.
          </p>
          <p>
            As of April 3, 2023, Mr. Glenn transitioned to Dr. Glenn after successfully defending his doctoral dissertation from CMU. Dr. Glenn officially graduates with his Doctor of Education on May 5, 2023... his 3rd degree from CMU.
          </p>
        </>
      )
    }
  ];

  return (
    <main>
      {person ? <Profile person={person} onClose={() => setPerson(null)} /> : null}
      <section id={styles.title}>
        <p>TEDxCentralMichiganUniversity Presents</p>
        <h1>The essense of a changing world</h1>
      </section>
      <section id={styles.instruction}>
        <section>
          <p>We're out of tickets this semester, but don't fret: you can watch the stream when we're live!</p>
          <section id={styles.player}>
            {addZeroIfNecessary(dayDifference)}:{addZeroIfNecessary(hourDifference)}:{addZeroIfNecessary(minuteDifference)}:{addZeroIfNecessary(secondDifference)}
            <p>until it happens!</p>
          </section>
        </section>
      </section>
      <section id={styles.speakers}>
        <section>
          <p>Featuring a range of perspectives from students and professionals</p>
        </section>
        <ul>
          <li>
            <button onClick={() => setPerson(people[0])}>
              <img src="/people/Anyah.jpg" />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[1])}>
              <img src="/people/Glenn.jpg" style={{objectPosition: "0px -34px"}} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[2])}>
              <img src="/people/Jana.jpg" />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[3])}>
              <img src="/people/Jessica.jpg" style={{objectPosition: "-14px"}} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[4])}>
              <img src="/people/Joseph.jpg" style={{objectPosition: "-44px"}} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[5])}>
              <img src="/people/Tiffany.jpg" style={{objectPosition: "-51px"}} />
            </button>
          </li>
        </ul>
      </section>
    </main>
  );

}