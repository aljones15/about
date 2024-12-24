import React from "react";
import type {Resume} from "../data/resume";
import {Section, SectionCard} from "@blueprintjs/core";

export default function ResumeContainer({resume}: {resume: Resume}) {
console.log({resume});
  return <span className="grid">
    <Section className="column is-one-third">
      <SectionCard>
        {resume.name}
      </SectionCard>
      <SectionCard>
        Address
      </SectionCard>
    </Section>
    <Section className="column is-two-third">
      <SectionCard>
        Positions
      </SectionCard>
    </Section>
  </span>
}