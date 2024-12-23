import React from "react";
import type {Resume} from "../data/resume";
import {Section} from "@blueprintjs/core";

export default function ResumeContainer({resume: Resume}) {
  return <div>
    <Section> One </Section>
    <Section> Two </Section>
  </div>
}