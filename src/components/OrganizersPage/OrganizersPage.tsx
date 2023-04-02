import React from "react";
import Organizer from "../Organizer/Organizer";
import styles from "./OrganizersPage.module.css";
import tyler from "../../people/Tyler.jpg";
import mitchell from "../../people/Mitchell.png";
import ameer from "../../people/Ameer.jpg";
import ava from "../../people/Ava.jpg";
import christian from "../../people/Christian.jpg";
import lauren from "../../people/Lauren.jpg";
import carolina from "../../people/Carolina.jpeg";

export default function Organizers() {

  return (
    <main id={styles.main}>
      <section>
        <h1>TEDxCentral Michigan University Team</h1>
        <ul>
          <Organizer name="Tyler Thompson" title="Lead Organizer" imgSrc={tyler} offsetY={20} scale={1.4} />
          <Organizer name="Mitchell Basham" imgSrc={mitchell} />
          <Organizer name="Natalie Brant" />
        </ul>
        <ul>
          <Organizer name="Ameer Hicks" title="Head of Speaker Curation" imgSrc={ameer} offsetY={-20} />
          <Organizer name="Ava Brewer" title="Head of Design & Marketing" imgSrc={ava} />
          <Organizer name="Christian Toney" title="Organizer and Head of Technology" imgSrc={christian} offsetY={-50} />
          <Organizer name="Gabby Mifsud" title="Head of Partnerships & Sponsorships" />
          <Organizer name="Christian Mueller" title="Social Media Manager" />
          <Organizer name="Lauren Hull" title="Marketing Staff" imgSrc={lauren} offsetY={-128} />
          <Organizer name="Carolina Hernandez-Ruiz" title="Marketing Staff" imgSrc={carolina} offsetY={-115} />
          <Organizer name="Brooke Gordon" title="Marketing Staff" />
        </ul>
      </section>
      <section>
        <h1>Special Thanks</h1>
        <ul>
          <li style={{width: "auto"}}>Central Michigan University Student Government Association • Central Michigan University University Events</li>
        </ul>
      </section>
    </main>
  );

}