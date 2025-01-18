import React from 'react';
import iEducation from "../data/Education";
import {School, Certificate} from "../types";
import {CompoundTag, Classes, Section, SectionCard} from "@blueprintjs/core";

export default function Education({education}: {
  education: iEducation,
}) {
  return <div className="education">
    <h3 style={{textAlign: "center"}}>Colleges & Universities</h3>
    <SchoolSection schools={education.schools} />
    <h3 style={{textAlign: "center"}}>Certificates</h3>
    <DegreeSection certificates={education.certificates} />
  </div>
}

export function SchoolSection({schools}: {schools: Array<School>}) {
  return <div className="row" style={{justifyContent: 'center'}}>
    {schools.map(sch => <School key={sch.name} school={sch} />)}
  </div>
}

export function DegreeSection({certificates}: {certificates: Array<Certificate>}) {
  return <div className="row">
  </div>
}

export function School({school}: {school: School}) {
  return <div className="col-xs-5">
    <Section
      title={school.name}
      icon="book"
      elevation={1}
      collapsible={true}
      rightElement={<CompoundTag
        intent="primary"
        leftContent={school.degree[0].type}>
	  {school.degree[0].field}
	</CompoundTag>}
    >
      <SectionCard>
        {school.startDate}
      </SectionCard>
    </Section>
  </div>
}
