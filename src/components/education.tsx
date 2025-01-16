import React from 'react';
import {Education} from "../types";
import {Classes, Section, SectionCard} from "@blueprintjs/core";

export default function Education({education}: {education: Array<Education>}) {
  return <div className="row" style={{justifyContent: 'center'}}>
    {education.map(ed => <School key={ed.name} school={ed} />)}
  </div>
}

export function School({school}: {school: Education}) {
  return <div className="col-xs-5">
    <Section
      title={school.name}
      icon="book"
      elevation={1}
      collapsible={true}
      className=""
      rightElement={<span>{`${school.degree} ${school.field}`}</span>}
    >
      <SectionCard>
        {school.startDate}
      </SectionCard>
    </Section>
  </div>
}
