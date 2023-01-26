import React from "react";

export default function AboutSection({heading, children}: {heading: string; children: ReactNode}) {

  return (
    <section>
      <h1>
        {heading}
      </h1>
      {children}
    </section>
  )

}