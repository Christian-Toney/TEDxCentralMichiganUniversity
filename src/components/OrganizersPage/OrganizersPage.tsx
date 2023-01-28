import React from "react";
import Organizer from "../Organizer/Organizer";
import styles from "./OrganizersPage.module.css";

export default function Organizers() {

  return (
    <main id={styles.main}>
      <section>
        <h1>Operations Team</h1>
        <ul>
          <Organizer name="Tyler Thompson" />
          <Organizer name="Mitchell Basham" />
          <Organizer name="Natalie Brant" />
        </ul>
      </section>
      <section>
        <h1>Speaker Curation Team</h1>
        <ul>
          <Organizer name="Ameer Hicks" title="Head of Speaker Curation" />
        </ul>
      </section>
      <section>
        <h1>Design & Marketing Team</h1>
        <ul>
          <Organizer name="Ava Brewer" title="Head of Design & Marketing" />
          <Organizer name="Christian Toney" title="Web Designer" />
        </ul>
      </section>
      <section>
        <h1>Partnership & Sponsorship Team</h1>
        <ul>
          <Organizer name="Gabby Mifsud" title="Head of Partnerships & Sponsorships" />
        </ul>
      </section>
    </main>
  )

}