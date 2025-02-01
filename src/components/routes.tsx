import React from "react";
import { Routes, Route } from "react-router";
import Positions from "./position";
import SkillsContainer from "./skills";
import Bio from "./bio";
import Education from "./education";
import Projects from "./projects";
import type {Resume} from "../classes/Resume";

export default function Router({resume}: {resume: Resume}) {
  return <Routes>
    <Route path={"/"} element={<Positions positions={resume.positions}/>} />
    <Route path={"/bio"} Component={Bio} />
    <Route path={"/education"} element={<Education education={resume.education}/>} />
    <Route path={"/positions"} element={<Positions positions={resume.positions}/>} />
    <Route path={"/projects"} element={<Projects projects={resume.projects} />} />
    <Route path={"/skills"} element={<SkillsContainer positions={resume.positions}/>} />
  </Routes>
}

