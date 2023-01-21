import React from "react";
import "./global.css";

export default function App() {

  return (
    <>
      <header>
        <a href="/">
          <img src="/logo.jpg" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="apply">
          <h1>Wanna give it a go?</h1>
          <section onClick={() => window.open("https://forms.microsoft.com/r/mmezsbdyBx")}>
            <button>Apply to become a speaker</button>
          </section>
          <p>We also have <a href="/about#volunteer">volunteer opprotunities</a>.</p>
        </section>
      </main>
      <footer>
        <p>This independent TEDx event is operated under license from TED.</p>
      </footer>
    </>
  )

}