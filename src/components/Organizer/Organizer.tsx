import React from "react";

export default function Organizer({name, title, imgSrc, offsetX, offsetY, scale = 1.01}: {name: string, title?: string, imgSrc?: string, offsetX?: number, offsetY?: number, scale?: number}) {

  return (
    <li>
      <section>
        {
          imgSrc ? (
            <img src={imgSrc} style={{transform: `scale(${scale})`, objectPosition: offsetX !== undefined || offsetY !== undefined ? `${offsetX ?? 0}px ${offsetY ?? 0}px` : undefined}} />
          ) : null
        }
      </section>
      <b>{name}</b>
      <p>{title ?? "Organizer"}</p>
    </li>
  );

}