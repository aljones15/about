import React, {useState} from "react";
import { redirect } from "react-router";
import type {Resume} from "../data/resume";
import Positions from "./position";
import SkillsContainer from "./skills";
import Router from "./routes";
import {Button, Section, SectionCard, Navbar} from "@blueprintjs/core";

const Sections = {
  Experience: '/experience',
  Skills: '/skills',
  Education: '/education',
  Bio: '/bio'
}

export default function ResumeContainer({resume}: {resume: Resume}) {
  return <Section>
    <Navbar>
      <Navbar.Group>
      <Navbar.Heading>Andrew Lyle Jones</Navbar.Heading>
      <Navbar.Divider />
      <a href="/skills">Skills</a>
      <Button
        onClick={() => redirect(Sections.Experience)}
        className="bp5-minimal"
	text="Experience"
	icon="applications" />
      <Button
        onClick={() => redirect("/skills")}
        className="bp5-minimal"
	text="Skills"
	icon="intelligence"/>
      <Button
        onClick={() => redirect(Sections.Education)}
        className="bp5-minimal"
	text="Education"
	icon="manual"/>
      <Button
        onClick={() => redirect(Sections.Bio)}
        className="bp5-minimal"
	text="Bio"
	icon="user"/>
      </Navbar.Group>
    </Navbar>
    <SectionCard>
      <Router resume={resume} />
    </SectionCard>
  </Section>
}
