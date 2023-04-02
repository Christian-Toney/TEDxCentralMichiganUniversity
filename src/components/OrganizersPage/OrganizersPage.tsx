import React from "react";
import Organizer from "../Organizer/Organizer";
import styles from "./OrganizersPage.module.css";

export default function Organizers() {

  return (
    <main id={styles.main}>
      <section>
        <h1>TEDxCentral Michigan University Team</h1>
        <ul>
          <Organizer name="Tyler Thompson" imgSrc="/people/Tyler.jpg" offsetY={20} scale={1.4} />
          <Organizer name="Mitchell Basham" imgSrc="/people/Mitchell.png" />
          <Organizer name="Natalie Brant" />
        </ul>
        <ul>
          <Organizer name="Ameer Hicks" title="Head of Speaker Curation" imgSrc="/people/Ameer.jpg" offsetY={-20} />
          <Organizer name="Ava Brewer" title="Head of Design & Marketing" imgSrc="/people/Ava.jpg" />
          <Organizer name="Christian Toney" title="Organizer and Head of Technology" imgSrc="/people/Christian.jpg" offsetY={-50} />
          <Organizer name="Gabby Mifsud" title="Head of Partnerships & Sponsorships" />
          <Organizer name="Christian Mueller" title="Social Media Manager" />
          <Organizer name="Lauren Hull" title="Marketing Staff" imgSrc="/people/Lauren.jpg" offsetY={-128} />
          <Organizer name="Carolina Hernandez-Ruiz" title="Marketing Staff" imgSrc="/people/Carolina.jpeg" offsetY={-115} />
          <Organizer name="Brooke Gordon" title="Marketing Staff" />
        </ul>
      </section>
      <section>
        <h1>Special Thanks</h1>
        <ul>
          <li style={{width: "auto"}}>Central Michigan University Student Government Association</li>
          <li style={{width: "auto"}}>Central Michigan University University Events</li>
        </ul>
      </section>
    </main>
  );

}