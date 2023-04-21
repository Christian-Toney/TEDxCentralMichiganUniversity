import React from "react";
import ignite from "../../sponsors/Ignite Donuts Logo.png";
import entrepreneurship from "../../sponsors/Institute for Entrepreneurship.jpeg";
import leadership from "../../sponsors/Sarah R. Opperman Leadership Institute_Lockup_Vert_MaroonGold[68].png";
import bookstore from "../../sponsors/bookstoreart.jpg";
import einstein from "../../sponsors/einstein_logo.13c66612.png";
import sga from "../../sponsors/20210706_OfficeofSAI_StudentGovernmentLogo_001f86bb8ca-b6bd-4fb1-850b-88275f541424.png";
import cse from "../../sponsors/CSE_ActionC_Lockup_Horz_MaroonGold6c162d1b-cede-4f5e-b15d-985f0609fa0d.png";
import ehs from "../../sponsors/College-Lockups-for-Web_EHS0728919f-ef33-44f2-9815-580b18dd0cfe.svg";

export default function SponsorsPage() {

  return (
    <main>
      <h1></h1>
      <ul>
        <li>
          <img src={ignite} />
          <section>
            <h1>Ignite</h1>
            <p>Ignite Donuts is a student run business. Located through many outlets on campus and a cafe in Mt. Pleasant, offering artisanal sweets, drinks, and homemade sandwiches. The business began from a CMU Alum who started frying donuts on campus 6 years ago. It is founded on serving and loving this community. Please visit Ignitedonuts.com and its social media outlets (@ignitedonuts) to get in touch!</p>
          </section>
        </li>
        <li>
          <img src={entrepreneurship} />
          <section>
            <h1>John Gustinic</h1>
            <p>John Gustincic, JD, is a faculty member in the CMU Entrepreneurship Department, and serves as the Entrepreneur-in-Residence for the Isabella Bank Institute for Entrepreneurship (IBIE) at CMU.</p>
            <p>The IBIE's goals are to teach practical skills, inspire innovative thinking, and connect students with mentors and other resources. We accomplish this through activities such as workshops, the New Venture Challenge, the Make-a-Pitch event, where students from all disciplines interact with experienced alumni, faculty, entrepreneurs, investors, and other business and political leaders to become better prepared to put their stamp on the world!</p>
          </section>
        </li>
        <li>
          <img src={leadership} />
          <section>
            <h1>Dan Gaken - Leadership Institute</h1>
            <p>Opened in 1997, the Sarah R. Opperman Leadership Institute is the nations' premier undergraduate leadership program.  The Leadership Institute serves as the coordinating body for CMU's vast student leadership development offerings.  The Institute strives to build leadership programs that are innovative, inclusive, and intentional.  The LI offers both curricular and co-curricular leadership opportunities for all students, including Leadership Safari and the dynamic Leader Advancement Scholar cohort.</p>
          </section>
        </li>
        <li>
          <img src={bookstore} />
          <section>
            <h1>CMU Bookstore</h1>
            <p>Check us out at www.cmubookstore.com</p>
          </section>
        </li>
      </ul>
      <ul>
        <li>
          <img src={einstein} />
        </li>
        <li>
          <img src={sga} />
        </li>
        <li>
          <img src={cse} />
        </li>
        <li>
          <img src={ehs} />
        </li>
      </ul>
    </main>
  );

}