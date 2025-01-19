import React from 'react';
import iEducation from "../classes/Education";
import {Certificate, Degree} from "../types";
import {Card, CompoundTag, Classes, Section, SectionCard} from "@blueprintjs/core";

export default function Education({education}: {
  education: iEducation,
}) {
  return <div className="row education">
    <Card className="col-xs-4">
    <h3>Degrees</h3>
        {education.degrees.map(degree => <DegreeSection
	  key={degree.type + degree.field}
	  degree={degree} />)}
    </Card>
    <Card className="col-xs-8">
    <h3>Certificates</h3>
      {education.certificates.map(certificate => <CertificateSection
        key={certificate.title + certificate.provider.name}
	certificate={certificate} />)}
    </Card>
  </div>
}

export function DegreeSection({degree}: {degree: Degree}) {
  return <Section
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
    </Section>;
}

export function CertificateSection({certificate}: {certificate: Certificate}) {
  return <div className="col-xs-4">
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
