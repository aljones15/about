import React from "react";
import type {Resume} from "../data/resume";
import Positions from "./position";
import {Section, SectionCard} from "@blueprintjs/core";

export default function ResumeContainer({resume}: {resume: Resume}) {
console.log({resume});
  return <span className="row">
    <Section className="col-xs-4">
      <SectionCard padded={false}>
        {resume.name}
      </SectionCard>
      <SectionCard padded={false}>
        Address
      </SectionCard>
    </Section>
    <Section className="col-xs-8">
      <Positions positions={resume.positions} />
    </Section>
  </span>
}