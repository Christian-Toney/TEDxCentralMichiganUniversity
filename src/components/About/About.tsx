import React from "react";
import AboutSection from "../AboutSection/AboutSection";
import styles from "./About.module.css";

export default function About() {

  return (
    <main id={styles.about}>
      <AboutSection heading="About TED">
        <p>
          TED is a nonprofit organization devoted to Ideas Worth Spreading, often in the form of short talks delivered by leading thinkers and doers. Many of these talks are given at TED Conferences, intimate TED Salons and thousands of independently organised TEDx events around the world. Videos of these talks are made available, free, on <a href="https://ted.com">TED.com</a> and other platforms. Audio versions of TED Talks are published to <a href="https://applepodcasts.com/tedtalksdaily">TED Talks Daily</a>, available on all podcast platforms.
        </p>
        <p>
          TED's open and free initiatives for spreading ideas include <a href="https://ted.com">TED.com</a>, where new TED Talk videos are posted daily; <a href="https://ted.com/tedx">TEDx</a>, which licenses thousands of individuals and groups to host local, self-organized TED-style events around the world; the <a href="https://ted.com/fellows">TED Fellows</a> program, which selects innovators from around the globe to amplify the impact of their remarkable projects and activities; <a href="https://audaciousproject.org">The Audacious Project</a>, which surfaces and funds critical ideas that have the potential to impact millions of lives; <a href="https://www.ted.com/about/programs-initiatives/ted-translators">TED Translators Program</a>, which crowdsources the subtitling of TED Talks so that big ideas can spread across languages and borders; and the educational initiative <a href="https://ed.ted.com">TED-Ed</a>. TED also offers <a href="https://tedatwork.ted.com">TED@Work</a> a program that reimagines TED Talks for workplace learning. TED also has a growing library of original podcasts, including <a href="https://www.ted.com/podcasts/ted-interview">The TED Interview with Chris Anderson</a>, <a href="https://www.ted.com/podcasts/worklife">WorkLife with Adam Grant</a>, <a href="https://www.ted.com/podcasts/far_flung_with_saleem_reshamwala">Far Flung with Saleem Reshamwala</a> and <a href="https://www.ted.com/podcasts/how-to-be-a-better-human">How to Be a Better Human</a>.
        </p>
        <p>
          Follow TED on <a href="http://twitter.com/TEDTalks">Twitter</a>, <a href="http://www.facebook.com/TED">Facebook</a>, <a href="https://instagram.com/ted">Instagram</a> and on <a href="https://www.linkedin.com/company/ted-conferences">LinkedIn</a>.
        </p>
      </AboutSection>
      <AboutSection heading="About TEDx, x = independently organized event">
        <p>
          In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
        </p>
      </AboutSection>
    </main>
  );

}