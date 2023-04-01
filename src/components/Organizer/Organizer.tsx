import React from "react";

export default function Organizer({name, title, imgSrc, offsetX = 0, offsetY = 0, scale = 1}: {name: string, title?: string, imgSrc?: string, offsetX?: number, offsetY?: number, scale?: number}) {

  return (
    <li>
      <section>
        {
          imgSrc ? (
            <img src={imgSrc} style={{transform: `scale(${scale})`, objectPosition: offsetX || offsetY ? `${offsetX}px ${offsetY}px` : undefined}} />
          ) : null
        }
      </section>
      <b>{name}</b>
      <p>{title ?? "Organizer"}</p>
    </li>
  );

}