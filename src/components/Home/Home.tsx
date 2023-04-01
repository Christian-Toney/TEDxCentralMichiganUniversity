import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

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

  return (
    <main>
      <section id={styles.title}>
        <p>The Central Michigan University Student Government Association presents</p>
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
            <button>
              <img src="/people/Anyah.jpg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Glenn.jpg" style={{objectPosition: "0px -34px"}} />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Jana.jpg" />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Jessica.jpg" style={{objectPosition: "-14px"}} />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Joseph.jpg" style={{objectPosition: "-44px"}} />
            </button>
          </li>
          <li>
            <button>
              <img src="/people/Tiffany.jpg" style={{objectPosition: "-51px"}} />
            </button>
          </li>
        </ul>
      </section>
    </main>
  );

}