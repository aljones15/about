import React, {useState} from 'react';
import iEducation from "../classes/Education";
import {Certificate, Degree} from "../types";
import {Card, CompoundTag, Tag, Section, SectionCard, Icon} from "@blueprintjs/core";
import MonthYear from "./monthYear";

export default function Education({education}: {
  education: iEducation,
}) {
  const certs = education.certificates.slice();
  const degrees = education.degrees.slice();
  return <div className="row education">
    <DegreeSection degrees={degrees} />
    <CertificateSection certificates={certs} />
  </div>
}

export function DegreeSection({degrees}) {
    return <Card className="col-xs-4">
    <h3>Degrees</h3>
        {degrees.map(degree => <DegreeCard
	  key={degree.type + degree.field}
	  degree={degree} />)}
    </Card>
}

export function DegreeCard({degree}: {degree: Degree}) {
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

export function CertificateSection({certificates}) {
  return <Card className="col-xs-8">
    <h3>Certificates</h3>
    <div className="row">
      {certificates.map(certificate => <CertificateCard
        key={certificate.title + certificate.provider.name}
	certificate={certificate} />)}
    </div>
    </Card>
}

export function CertificateCard({certificate}: {certificate: Certificate}) {
  const [isOpen, setOpen] = useState(false);
  return <div className="col-xs-6" style={{marginBottom: "1rem"}}>
    <Section
      title={certificate.title}
      icon="confirm"
      elevation={1}
      collapsible={true}
      onClick={() => setOpen(!isOpen)}
      collapseProps={{isOpen}}
      rightElement={<Tag
        intent="success"
	> Certificate
	</Tag>}
      >
    <SectionCard>
      <div className="row">
        <span className="col-xs-6">
          {certificate.provider.name}
        </span>
        <span className="col-xs-6">
          <a target="_blank" rel="noreferrer" href={certificate.link}>
	    <Icon
	      style={{margin: '0.25rem'}}
	      icon="share"
	      title="Download Certificate"
	      htmlTitle="Download Certificate"/>
	  </a>
        </span>
      </div>
      <div className="row">
        <span className="col-xs-6">
          <Issued issued={certificate.issued} />
        </span>
        <span className="col-xs-6">
          {certificate.skills.map(s => <Tag
	    key={s}
	    style={{margin: '0.1rem'}}
	    round={true}>
	    {s}
	  </Tag>)}
        </span>
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
