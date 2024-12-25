import React, {useState} from "react";
import type {Resume} from "../data/resume";
import Positions from "./position";
import {Button, Section, SectionCard, Navbar} from "@blueprintjs/core";

export default function ResumeContainer({resume}: {resume: Resume}) {
  const [section, setSection] = useState("experience");
  return <Section>
    <Navbar>
      <Navbar.Group>
      <Navbar.Heading>Andrew Lyle Jones</Navbar.Heading>
      <Navbar.Divider />
      <Button
        onClick={() => setSection("experience")}
        className="bp5-minimal"
	text="Experience"
	icon="applications" />
      <Button
        onClick={() => setSection("skills")}
        className="bp5-minimal"
	text="Skills"
	icon="intelligence"/>
      <Button
        onClick={() => setSection("education")}
        className="bp5-minimal"
	text="Education"
	icon="manual"/>
      <Button
        onClick={() => setSection("bio")}
        className="bp5-minimal"
	text="Bio"
	icon="user"/>
      </Navbar.Group>
    </Navbar>
    <SectionCard>
      {section}
    </SectionCard>
  </Section>
}