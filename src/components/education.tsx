import React from 'react';
import {Education} from "../types";
import {CompoundTag, Classes, Section, SectionCard} from "@blueprintjs/core";

export default function Education({
  schools, certificates
}: {
  schools: Array<Education>,
  certificates: Array<Education>
}) {
  return <div className="education">
    <h3 style={{textAlign: "center"}}>Colleges & Universities</h3>
    <SchoolSection schools={schools} />
    <h3 style={{textAlign: "center"}}>Certificates</h3>
    <SchoolSection schools={certificates} />
  </div>
}

export function SchoolSection({schools}: {schools: Array<Education>}) {
  return <div className="row" style={{justifyContent: 'center'}}>
    {schools.map(sch => <School key={sch.name} school={sch} />)}
  </div>
}

export function School({school}: {school: Education}) {
  return <div className="col-xs-5">
    <Section
      title={school.name}
      icon="book"
      elevation={1}
      collapsible={true}
      rightElement={<CompoundTag
        intent="primary"
        leftContent={school.degree}>
	  {school.field}
	</CompoundTag>}
    >
      <SectionCard>
        {school.startDate}
      </SectionCard>
    </Section>
  </div>
}
