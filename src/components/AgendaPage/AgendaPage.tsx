import React from "react";
import styles from "./AgendaPage.module.css";

export default function AgendaPage() {

  return (
    <main id={styles.agenda}>
      <h1 style={{textAlign: "center"}}>Agenda</h1>
      <ol>
        <li>
          <b>Registration</b>
          <span>TEDxCentral Michigan University Staff</span>
        </li>
        <li>
          <b>French Auditorium doors open</b>
        </li>
        <li>
          <b>TEDx introduction</b>
        </li>
        <li>
          <b>Host introduction</b>
          <span>Tyler Thompson</span>
        </li>
        <li>
          <b>Speakers</b>
          <ol>
            <li>Tiffany Jurge</li>
            <li>Anyah Lewis</li>
            <li>Jessica Hetzel</li>
            <li>Dr. Pattersons-Stephens</li>
          </ol>
        </li>
        <li>
          <b>Intermission</b>
        </li>
        <li>
          <b>French Auditorium reopens</b>
        </li>
        <li>
          <span><b>Speakers</b> (continued)</span>
          <ol>
            <li>Jada Thrash</li>
            <li>Dr. Nikita Murry</li>
            <li>Joseph Marah</li>
          </ol>
        </li>
        <li>
          <b>Acknowledgments</b>
          <span>Tyler Thompson</span>
        </li>
        <li>
          <b>Closing speaker</b>
          <span>Dr. Jonathan Glenn</span>
        </li>
      </ol>
    </main>
  );

}