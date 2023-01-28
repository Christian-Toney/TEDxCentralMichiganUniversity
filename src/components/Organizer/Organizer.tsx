import React from "react";

export default function Organizer({name, title}: {name: string, title?: string}) {

  return (
    <li>
      <b>{name}</b>
      <p>{title ?? "Organizer"}</p>
    </li>
  )

}