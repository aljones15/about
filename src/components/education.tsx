import React, {useState} from 'react';
import iEducation from "../classes/Education";
import {iCertificate, iDegree} from "../types";
import {Card, CompoundTag, Tag, Section, SectionCard, Icon} from "@blueprintjs/core";
import MonthYear from "./monthYear";

export default function Education({education}: {
  education: iEducation,
}) {
  return <div className="row education">
    <DegreeSection degrees={education.degrees} />
    <CertificateSection certificates={education.certificates} />
  </div>
}

export function DegreeSection({degrees}: {degrees: Array<iDegree>}) {
    const _degrees = degrees.slice();
    return <Card className="col-xs-4">
    <h3>Degrees</h3>
        {_degrees.map(degree => <DegreeCard
	  key={degree.type + degree.field}
	  degree={degree} />)}
    </Card>
}

export function DegreeCard({degree}: {degree: iDegree}) {
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

export function CertificateSection({certificates}: {certificates: iCertificate[]}) {
  // copy latest certificates
  const _certs = certificates.slice();
  // latest first
  _certs.sort((a,b) => new Date(b.issued).getTime() - new Date(a.issued).getTime());
  return <Card className="col-xs-8">
    <h3>Certificates</h3>
    <div className="row">
      {_certs.map(certificate => <CertificateCard
        key={certificate.title + certificate.provider.name}
	certificate={certificate} />)}
    </div>
    </Card>
}

export function CertificateCard({certificate}: {certificate: iCertificate}) {
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
        intent="success">
	  Certificate
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
