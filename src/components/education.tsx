import React from 'react';
import iEducation from "../classes/Education";
import {Certificate, Degree} from "../types";
import {Card, CompoundTag, Tag, Section, SectionCard} from "@blueprintjs/core";
import MonthYear from "./monthYear";

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
    <div className="row">
      {education.certificates.map(certificate => <CertificateSection
        key={certificate.title + certificate.provider.name}
	certificate={certificate} />)}
    </div>
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
	    <div className="row">
              <div className="col-xs-6">
                <Issued issued={degree.issued} />
              </div>
              <div className="col-xs-6">
                {degree.skills.map(s => <div key={s}>
		  <Tag round={false} style={{margin: '0.1rem'}}>{s}</Tag>
		</div>)}
              </div>
            </div>
        </SectionCard>
    </Section>;
}

export function CertificateSection({certificate}: {certificate: Certificate}) {
  return <div className="col-xs-6" style={{marginBottom: "1rem"}}>
    <Section
      title={certificate.provider.name}
      icon="confirm"
      elevation={1}
      collapsible={true}
      rightElement={<Tag
        intent="success"
	> Certificate
	</Tag>}
      >
    <SectionCard>
      <p>{certificate.title}</p>
      <div className="row">
        <div className="col-xs-6">
          <Issued issued={certificate.issued} />
        </div>
        <div className="col-xs-6">
          {certificate.skills.map(s => <Tag
	    key={s}
	    style={{margin: '0.1rem'}}
	    round={true}>
	    {s}
	  </Tag>)}
        </div>
      </div>
    </SectionCard>
    </Section>
  </div>;
}

function Issued({issued}: {issued: string}) {
  return <CompoundTag
           intent="warning"
           leftContent="Issued">
             <MonthYear date={issued}/>
         </CompoundTag>
}
