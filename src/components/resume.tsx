import React from "react";
import type {Resume} from "../data/resume";
import Positions from "./position";
import {Button, Section, Navbar} from "@blueprintjs/core";

export default function ResumeContainer({resume}: {resume: Resume}) {
console.log({resume});
  return <Section>
    <Navbar>
      <Navbar.Group>
      <Navbar.Heading>Andrew Lyle Jones</Navbar.Heading>
      <Navbar.Divider />
      <Button className="bp5-minimal" text="Experience" icon="applications" />
      <Button className="bp5-minimal" text="Skills" icon="intelligence"/>
      <Button className="bp5-minimal" text="Education" icon="manual"/>
      <Button className="bp5-minimal" text="Bio" icon="user"/>
      </Navbar.Group>
    </Navbar>
  </Section>
}