import React from "react";
import type {Resume} from "../data/resume";
import Positions from "./position";
import {Section, SectionCard} from "@blueprintjs/core";

export default function ResumeContainer({resume}: {resume: Resume}) {
console.log({resume});
  return <span className="grid">
    <Section className="column is-one-third">
      <SectionCard padded={false}>
        {resume.name}
      </SectionCard>
      <SectionCard padded={false}>
        Address
      </SectionCard>
    </Section>
    <Section className="column is-two-third">
      <Positions positions={resume.positions} />
    </Section>
  </span>
}