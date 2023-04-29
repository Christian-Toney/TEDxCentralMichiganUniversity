import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Profile from "../Profile/Profile";
import anyah from "../../people/Anyah.png";
import glenn from "../../people/Glenn.png";
import jada from "../../people/Jada.png";
import jessica from "../../people/Jessica.png";
import joseph from "../../people/Joseph.png";
import tiffany from "../../people/Tiffany.png";
import nikita from "../../people/Nikita.png";
import shawna from "../../people/Shawna.png";

export interface Person {name: string; title: string; bio: React.ReactElement; src: string;}

export default function Home() {

  const [goalDate] = useState(new Date(1682789400000));
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  useEffect(() => {

    setTimeout(() => setCurrentDate(new Date), 1000);

  }, [currentDate]);

  function addZeroIfNecessary(number: number) {
    
    return `${number < 10 ? "0" : ""}${number}`;

  }

  const finalTimeDistance = (goalDate.getTime() - currentDate.getTime()) / 1000;
  let timeDifference = finalTimeDistance;
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
      src: anyah,
      bio: (
        <>
          <p>
            Anyah Lewis is a graduating senior from Central Michigan University majoring in sociology with a concentration in youth studies and minoring in family studies. Anyah's involvements include, but are not limited to, President of Zeta Phi Beta Sorority, Incorporated, Sigma Kappa Chapter, Ronald E. McNair Scholars Program with published research, and student mentoring for the Mentor Collective program. Anyah has a passion for community enrichment and is always looking for opportunities to give back. With an affinity toward youth development, Anyah endeavors to live a life of advocacy specifically for minority students. Lewis seeks to find innovative ways to implement resources and tools for young adolescents who've experienced trauma to heal and progress through life.
          </p>
        </>
      )
    },
    {
      name: "Johnathan Glenn",
      title: "Director of Diversity & Inclusion",
      src: glenn,
      bio: (
        <>
          <p>
            Dr. Jonathan Glenn is the Director of Diversity & Inclusion/Deputy Title IX Coordinator at Alma College. Prior to joining Alma College, Dr. Glenn worked as the Associate Athletic Director with CMU Athletics. In this position he worked with leadership development, student conduct, Title IX, care team reporting, DEI director, and sports administrator for Women's Basketball, Women's Lacrosse, and Wrestling. Glenn also serves as CMU Football's team Chaplain.
          </p>
          <p>
            Dr. Glenn also worked as an Assistant Director for the Leadership Institute at CMU after working as an Assistant Director in the Multicultural Academic Student Services office. Over the last seven years at Central Michigan University, Dr. Glenn has provided trainings on leadership, mentorship, multiculturalism, diversity, equity, and inclusion for several on and off campus organizations. He has presented for: St. Louis Public Schools, Gratiot County Public Schools, Omega Psi Phi, Florida Gulf Coast University, University of Nevada (Reno), Mid-American Conference, Resurrection Life Church, CMU Athletics, Aludyne Manufacturer, and several local leadership conferences.
          </p>
          <p>
            As of April 3, 2023, Mr. Glenn transitioned to Dr. Glenn after successfully defending his doctoral dissertation from CMU. Dr. Glenn officially graduates with his Doctor of Education on May 5, 2023... his third degree from CMU.
          </p>
        </>
      )
    },
    {
      name: "Jada Thrash",
      title: "Student",
      src: jada,
      bio: (
        <p>
          Jada Thrash is currently a junior at CMU with outdoor and environmental recreation and education majors and minors in leadership and communications. She is also a Leader Advancement Scholar passionate about using her voice for positive change in her community and inspiring others to do the same. Growing up in the suburbs of Washington, D.C., Atlanta, and Philadelphia before moving to Kalamazoo a decade ago, she found her voice taking part in over 40 plays, musicals, TV appearances, movies, speaking competitions, and public speeches. At CMU, she is a member of Alpha Gamma Delta sorority, a social media coordinator for the Leadership Institute, a campus ambassador, a Collegiate Panhellenic Council Greek Week Representative, and a facilitator for various Leadership conferences and events around campus.
        </p>
      )
    },
    {
      name: "Jessica Hetzel",
      title: "Student",
      src: jessica,
      bio: (
        <p>
          Jessica Hetzel is a student at Central Michigan University, currently pursuing a degree in disability studies and public relations. She has demonstrated her leadership skills by serving as the Director of Diversity, Equity, and Inclusion for the Collegiate Panhellenic Council. Her dedication and passion for disability rights and community inclusion have been evident throughout her academic career. Jessica is committed to making a positive impact in these areas, and she plans to continue her work in creating more inclusive and welcoming communities.
        </p>
      )
    },
    {
      name: "Joseph Marah",
      title: "Student",
      src: joseph,
      bio: (
        <p>
          Marah is the President and founder of the Joseph Marah Arnold Foundation, a nonprofit in Sierra Leone, West Africa. He is currently a student at Central Michigan University pursuing degrees in economics and political science with minors in entrepreneurship and public administration. Marah is actively involved in student leadership on campus, serving as the student government representative for the International Student Organization and Vice President of the Northwest Community Council. Marah enjoys cultural exchange and was previously a Kennedy-Lugar Youth Exchange Student. During his exchange year, Marah was involved in leadership and interfaith conferences in Istanbul, Turkey and Baltimore, Maryland. These conferences greatly widened his passions for cultural exchange and leadership.
        </p>
      )
    },
    {
      name: "Tiffany Jurge",
      title: "Student",
      src: tiffany,
      bio: (
        <p>
          Tiffany Jurge is a sophomore in CMU's Honors Program. She is currently pursuing a double major in Political Science and Environmental Studies with a minor in Spanish. She would like to pursue a career in environmental law or international policy. Tiffany hopes to follow her life-long goal of being an active citizen by advocating for those in need and exploring the complex nature of systemic issues.
        </p>
      )
    },
    {
      name: "Dr. Shawna Patterson-Stephens",
      title: "Vice President and Chief Diversity Officer",
      src: shawna,
      bio: (
        <>
          <p>
            Dr. Shawna Patterson-Stephens serves as Vice President and Chief Diversity Officer at Central Michigan University where she offers leadership within the Office for Institutional Diversity, Equity, and Inclusion.
          </p>
          <p>
            She earned her Ph.D. from Florida State University while studying higher education, earned her Master's in student affairs administration from Michigan State University, and graduated from CMU with her Bachelor's while majoring in sociology. She returns to CMU after most recently serving as the Associate Vice Chancellor of Student Affairs and the Director of the Office of Inclusion and Intercultural Relations at the University of Illinois at Urbana-Champaign.
          </p>
          <p>
            Dr. Patterson-Stephens dedicated her career to studying and creating more equitable systems for people from all avenues of life. She works toward creating an environment, both on campus and in the surrounding community, with the aim of ensuring everyone achieves their true potential. Shawna is an active member of Alpha Kappa Alpha Sorority, Incorporated, the Links, Incorporated, the NAACP, and the National Council for Negro Women, and Jack & Jill of America.
          </p>
        </>
      )
    },
    {
      name: "Nikita Murry",
      title: "Director of Diversity Education",
      src: nikita,
      bio: (
        <>
          <p>
            Dr. Nikita Murry provides oversight for institution-wide diversity education initiatives at CMU, serving in the position since 2020. Through her role, Dr. Murry engages with faculty, staff, students, and alumni using scholarship and best practices for DEI to help ensure all individuals who engage with CMU experience authentic belonging and inclusion.</p>
          <p>
            Work in the equity and inclusion space has been a core function of every position she has held, especially her work connecting wellness and social justice. Her previous work as a college educator, licensed professional counselor, and journalist gives her unique perspectives on tuning in to and elevating marginalized voices. Dr. Murry is a CMU alumna passionate about working with disenfranchised people to help them develop the tools and skills to achieve their highest potential.
          </p>
          <p>
            She earned her Ph.D. from Western Michigan University and a Master of Arts degree from CMU in professional counseling and school counseling, as well as a graduate certificate in international administration. Her undergraduate degree is in journalism from Michigan State University.
          </p>
          <p>
            Dr. Murry serves the community as the president and founder of The Go BACK Project, a nonprofit that seeks to help children, adolescents, and their families position themselves for a more hopeful future following an experience with physical or sexual trauma.
          </p>
        </>
      )
    }
  ];

  return (
    <main>
      {person ? <Profile person={person} onClose={() => setPerson(null)} /> : null}
      <section id={styles.title}>
        <p>TEDxCentral Michigan University Presents</p>
        <h1>The essence of a changing world</h1>
      </section>
      <p>April 29, 2023 • 1:30 PM - 5:30 PM • French Auditorium, 1200 S. Franklin St. Mt Pleasant, Michigan, 48858</p>
      <section id={styles.instruction}>
        <section>
          <p>We're out of tickets this semester, but don't fret: you can watch the stream when we're live!</p>
          <section id={styles.player}>
            {
              finalTimeDistance <= 0 ? <button onClick={() => location.href = "https://chipcast.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=be7ea427-ab23-450d-ab90-afee00e0d589"}>Watch now!</button> : (
                <>  
                  {addZeroIfNecessary(dayDifference)}:{addZeroIfNecessary(hourDifference)}:{addZeroIfNecessary(minuteDifference)}:{addZeroIfNecessary(secondDifference)}
                  <p>until it happens!</p>
                </>
              )
            }
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
              <img src={people[0].src} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[1])}>
              <img src={people[1].src} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[2])}>
              <img src={people[2].src} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[3])}>
              <img src={people[3].src} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[4])}>
              <img src={people[4].src} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[5])}>
              <img src={people[5].src} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[6])}>
              <img src={people[6].src} />
            </button>
          </li>
          <li>
            <button onClick={() => setPerson(people[7])}>
              <img src={people[7].src} />
            </button>
          </li>
        </ul>
      </section>
    </main>
  );

}