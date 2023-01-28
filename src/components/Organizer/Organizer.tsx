import React from "react";

export default function Organizer({name, title, imgSrc}: {name: string, title?: string, imgSrc?: string}) {

  return (
    <li>
      <section>
        {
          imgSrc ? (
            <img src={imgSrc} />
          ) : null
        }
      </section>
      <b>{name}</b>
      <p>{title ?? "Organizer"}</p>
    </li>
  )

}