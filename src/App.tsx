import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import OrganizersPage from "./components/OrganizersPage/OrganizersPage";
import "./global.css";

export default function App() {

  return (
    <>
      <header>
        <Link to="/">
          <img src="/logo.png" />
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
        <p>This independent TEDx event is operated under license from TED.</p>
      </footer>
    </>
  );

}