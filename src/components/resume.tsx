import React from "react";
import { useNavigate, useLocation } from "react-router";
import type {Resume} from "../data/resume";
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
  const location = useLocation();
  return <Section>
    <Navbar>
      <Navbar.Group>
      <Navbar.Heading>Andrew Lyle Jones</Navbar.Heading>
      <Navbar.Divider />
      <Button
        onClick={() => navigate(Sections.Experience)}
        className="bp5-minimal"
	text="Experience"
	active={location.pathname === Sections.Experience}
	icon="applications" />
      <Button
        onClick={() => navigate(Sections.Skills)}
        className="bp5-minimal"
	text="Skills"
	active={location.pathname === Sections.Skills}
	icon="intelligence"/>
      <Button
        onClick={() => navigate(Sections.Education)}
        className="bp5-minimal"
	text="Education"
	active={location.pathname === Sections.Education}
	icon="manual"/>
      <Button
        onClick={() => navigate(Sections.Bio)}
        className="bp5-minimal"
	text="Bio"
	active={location.pathname === Sections.Bio}
	icon="user"/>
      </Navbar.Group>
    </Navbar>
    <SectionCard>
      <Router resume={resume} />
    </SectionCard>
  </Section>
}
