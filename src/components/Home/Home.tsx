import React from "react";

export default function Home() {

  return (
    <main>
      <section id="apply">
        <h1>Wanna give it a go?</h1>
        <section onClick={() => window.open("https://forms.microsoft.com/r/mmezsbdyBx")}>
          <button>Apply to become a speaker</button>
        </section>
        <p>We also have <a href="/about#volunteer">volunteer opprotunities</a>.</p>
      </section>
    </main>
  )

}