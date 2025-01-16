import React from 'react';
import {Education} from "../types";
import {Classes, Section, SectionCard} from "@blueprintjs/core";

export default function Education({education}: {education: Array<Education>}) {
  return <div>
    {education.map(ed => <School key={ed.name} school={ed} />)}
  </div>
}

export function School({school}: {school: Education}) {
  return <Section
    title={school.name}
    icon="book"
    collapsible={true}
    className={`${Classes.ELEVATION_1}`}
  >
    {`${school.degree} ${school.field}`}
  </Section>
}
