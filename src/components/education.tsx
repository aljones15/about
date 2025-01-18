import React from 'react';
import iEducation from "../data/Education";
import {Certificate, Degree} from "../types";
import {CompoundTag, Classes, Section, SectionCard} from "@blueprintjs/core";

export default function Education({education}: {
  education: iEducation,
}) {
  return <div className="education">
    <h3 style={{textAlign: "center"}}>Degrees</h3>
      <div className="row" style={{justifyContent: 'center'}}>
        <DegreeSection degrees={education.degrees} />
      </div>
    <h3 style={{textAlign: "center"}}>Certificates</h3>
    <CertificateSection certificates={education.certificates} />
  </div>
}

export function DegreeSection({degrees}: {degrees: Array<Degree>}) {
  return degrees.map(degree => <div
      key={`${degree.type}${degree.field}`}
      className="col-xs-5">
      <Section
        title={degree.provider.name}
        icon="book"
        elevation={1}
        collapsible={true}
        rightElement={<CompoundTag
          intent="primary"
          leftContent={degree.type}>
	    {degree.field}
	  </CompoundTag>}
      >
        <SectionCard>
          {degree.startDate}
        </SectionCard>
      </Section>
    </div>);
}

export function CertificateSection({certificates}: {certificates: Array<Certificate>}) {
  return certificates.map(certificate => <div
    key={certificate.title + certificate.provider.name}>
      {certificate.title}
    </div>);
}