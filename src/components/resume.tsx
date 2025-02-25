import React from "react";
import { useNavigate, useLocation } from "react-router";
import type {Resume} from "../classes/Resume";
import Router from "./routes";
import {Button, Section, SectionCard, Navbar} from "@blueprintjs/core";

const Sections = {
  Bio: '/bio',
  Education: '/education',
  Positions: '/positions',
  Projects: '/projects',
  Abilities: '/abilities'
}

export default function ResumeContainer({resume}: {resume: Resume}) {
  const navigate = useNavigate();
  const location = useLocation();
  return <Section>
    <Navbar fixedToTop={true}>
      <Navbar.Group>
      <Navbar.Heading>Andrew Lyle Jones</Navbar.Heading>
      <Navbar.Divider />
      <Button
        onClick={() => navigate(Sections.Positions)}
        className="bp5-minimal"
	text="Positions"
	outlined={true}
	active={location.pathname === Sections.Positions}
	icon="inherited-group" />
      <Button
        onClick={() => navigate(Sections.Abilities)}
        className="bp5-minimal"
	outlined={true}
	text="Abilities"
	active={location.pathname === Sections.Abilities}
	icon="lightbulb"/>
      <Button
        onClick={() => navigate(Sections.Projects)}
	className="bp5-minimal"
	text="Projects"
	outlined={true}
	active={location.pathname === Sections.Projects}
	icon="build" />
      <Button
        onClick={() => navigate(Sections.Education)}
        className="bp5-minimal"
	text="Education"
	outlined={true}
	active={location.pathname === Sections.Education}
	icon="manual"/>
      <Button
        onClick={() => navigate(Sections.Bio)}
        className="bp5-minimal"
	text="Bio"
	outlined={true}
	active={location.pathname === Sections.Bio}
	icon="user"/>
      </Navbar.Group>
    </Navbar>
    <SectionCard>
      <Router resume={resume} />
    </SectionCard>
  </Section>
}
