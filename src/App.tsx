import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import OrganizersPage from "./components/OrganizersPage/OrganizersPage";
import "./global.css";
import logo from "./logo.png";

export default function App() {

  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/about">About TED</Link>
            </li>
            <li>
              <Link to="/organizers">Organizers</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/organizers" element={<OrganizersPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <footer>
        <section>
          <section>
            <h1>Explore</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About TED</Link>
              </li>
              <li>
                <Link to="/organizers">Organizers</Link>
              </li>
            </ul>
          </section>
          <section>
            <h1>Community</h1>
            <ul>
              <li>
                <a href="#">Tickets</a>
              </li>
              <li>
                <a href="#">Livestream</a>
              </li>
              <li>
                <a href="https://instagram.com/TEDxCentralMichiganUniversity" target="_blank" rel="noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://github.com/Sudobeast/TEDxCentralMichiganUniversity" target="_blank" rel="noreferrer">GitHub</a>
              </li>
            </ul>
          </section>
        </section>
        <section id="group2">
          <p>This independent TEDx event is operated under license from TED.</p>
          <section>
            <button onClick={() => window.scrollTo({top: 0})}>Go to top</button>
          </section>
        </section>
      </footer>
    </>
  );

}