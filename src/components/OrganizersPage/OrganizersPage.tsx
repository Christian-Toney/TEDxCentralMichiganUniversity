import React from "react";
import Organizer from "../Organizer/Organizer";
import styles from "./OrganizersPage.module.css";
import tyler from "../../people/Tyler.jpg";
import mitchell from "../../people/Mitchell.png";
import ameer from "../../people/Ameer.jpg";
import ava from "../../people/Ava.jpg";
import christianM from "../../people/ChristianM.jpg";
import christianT from "../../people/ChristianT.jpg";
import lauren from "../../people/Lauren.jpg";
import carolina from "../../people/Carolina.jpeg";
import brooke from "../../people/Brooke.jpg";
import rhiannon from "../../people/Rhiannon.jpg";
import natalie from "../../people/Natalie.jpg";

export default function Organizers() {

  return (
    <main id={styles.main}>
      <section>
        <h1>TEDxCentral Michigan University Team</h1>
        <ul>
          <Organizer name="Tyler Thompson" title="Lead Organizer" imgSrc={tyler} offsetY={10} scale={1.4} />
          <Organizer name="Mitchell Basham" imgSrc={mitchell} />
          <Organizer name="Natalie Brant" imgSrc={natalie} />
          <Organizer name="Ameer Hicks" title="Head of Speaker Curation" imgSrc={ameer} offsetY={-20} />
          <Organizer name="Ava Brewer" title="Head of Design & Marketing" imgSrc={ava} />
          <Organizer name="Christian Toney" title="Organizer and Head of Technology" imgSrc={christianT} offsetY={-50} />
          <Organizer name="Gabby Mifsud" title="Head of Partnerships & Sponsorships" />
          <Organizer name="Christian Mueller" title="Social Media Manager" imgSrc={christianM} offsetY={0} />
          <Organizer name="Lauren Hull" title="Marketing Staff" imgSrc={lauren} offsetY={-128} />
          <Organizer name="Carolina Hernandez-Ruiz" title="Marketing Staff" imgSrc={carolina} offsetY={-115} />
          <Organizer name="Brooke Gordon" title="Marketing Staff" imgSrc={brooke} />
          <Organizer name="Rhiannon Grodnik" title="Marketing Staff" imgSrc={rhiannon} offsetY={-25} />
        </ul>
      </section>
    </main>
  );

}