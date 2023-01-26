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
      
      <footer>
        <p>This independent TEDx event is operated under license from TED.</p>
      </footer>
    </>
  )

}