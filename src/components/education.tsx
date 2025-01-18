import React from 'react';
import iEducation from "../data/Education";
import {Certificate, Degree} from "../types";
import {CompoundTag, Classes, Section, SectionCard} from "@blueprintjs/core";

export default function Education({education}: {
  education: iEducation,
}) {
  return <div className="education">
    <h3 className="text-center">Degrees</h3>
      <div className="row content-center">
        {education.degrees.map(degree => <DegreeSection
	  key={degree.type + degree.field}
	  degree={degree} />)}
      </div>
    <h3 style={{textAlign: "center"}}>Certificates</h3>
      {education.certificates.map(certificate => <CertificateSection
        key={certificate.title + certificate.provider.name}
	certificate={certificate} />)}
  </div>
}

export function DegreeSection({degree}: {degree: Degree}) {
  return <div
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
    </div>;
}

export function CertificateSection({certificate}: {certificate: Certificate}) {
  return <div className="col-xs-3">
    <Section
      title={certificate.provider.name}
      icon="book"
      elevation={1}
      collapsible={true}
      rightElement={<CompoundTag
        intent="success"
	leftContent="Certificate">
	  {certificate.title}
	</CompoundTag>}
      >
    <SectionCard>
      {certificate.title}
    </SectionCard>
    </Section>
  </div>;
}