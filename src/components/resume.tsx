import React, {useState} from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  return <Section>
    <Navbar>
      <Navbar.Group>
      <Navbar.Heading>Andrew Lyle Jones</Navbar.Heading>
      <Navbar.Divider />
      <Button
        onClick={() => navigate(Sections.Experience)}
        className="bp5-minimal"
	text="Experience"
	icon="applications" />
      <Button
        onClick={() => navigate("/skills")}
        className="bp5-minimal"
	text="Skills"
	icon="intelligence"/>
      <Button
        onClick={() => navigate(Sections.Education)}
        className="bp5-minimal"
	text="Education"
	icon="manual"/>
      <Button
        onClick={() => navigate(Sections.Bio)}
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
