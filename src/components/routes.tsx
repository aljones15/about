import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Positions from "./position";
import SkillsContainer from "./skills";
import Bio from "./bio";
import Education from "./education";

const Router = () => {
  return <BrowserRouter>
    <Route path={"/positions"} Component={Positions} />
    <Route path={"/skills"} Component={SkillsContainer} />
    <Route path={"/bio"} Component={Bio} />
    <Route path={"/education"} Component={Education} />
  </BrowserRouter>
}

