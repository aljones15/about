import React, {useState} from "react";
import type {Resume} from "../data/resume";
import Positions from "./position";
import {Button, Section, SectionCard, Navbar} from "@blueprintjs/core";

enum Sections {
  Experience,
  Skills,
  Education,
  Bio
}

export default function ResumeContainer({resume}: {resume: Resume}) {
  const [section, setSection] = useState(Sections.Experience);
  const sectionCase = (selection: Sections) => {
    switch(selection) {
      case Sections.Experience: {
        return <Positions positions={resume.positions}/>
      }
      case Sections.Skills: {
        return <div>Skills</div>
      }
      case Sections.Education: {
        return <div>Education</div>
      }
      case Sections.Bio: {
        return <div>Bio</div>
      }
      default:
        throw new Error(`Unknown Section ${selection} expected ${Sections}`);
    }
  }
  return <Section>
    <Navbar>
      <Navbar.Group>
      <Navbar.Heading>Andrew Lyle Jones</Navbar.Heading>
      <Navbar.Divider />
      <Button
        onClick={() => setSection(Sections.Experience)}
        className="bp5-minimal"
	text="Experience"
	icon="applications" />
      <Button
        onClick={() => setSection(Sections.Skills)}
        className="bp5-minimal"
	text="Skills"
	icon="intelligence"/>
      <Button
        onClick={() => setSection(Sections.Education)}
        className="bp5-minimal"
	text="Education"
	icon="manual"/>
      <Button
        onClick={() => setSection(Sections.Bio)}
        className="bp5-minimal"
	text="Bio"
	icon="user"/>
      </Navbar.Group>
    </Navbar>
    <SectionCard>
      {sectionCase(section)}
    </SectionCard>
  </Section>
}

