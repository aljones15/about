import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Positions from "./position";
import SkillsContainer from "./skills";
import Bio from "./bio";
import Education from "./education";
import type {Resume} from "../data/resume";

export default function Router({resume}: {resume: Resume}) {
  return <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Positions positions={resume.positions}/>} />
      <Route path={"/positions"} element={<Positions positions={resume.positions}/>} />
      <Route path={"/skills"} Component={SkillsContainer} />
      <Route path={"/bio"} Component={Bio} />
      <Route path={"/education"} Component={Education} />
    </Routes>
  </BrowserRouter>
}

