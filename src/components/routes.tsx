import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Positions from "./position";
import SkillsContainer from "./skills";
import Bio from "./bio";
import Education from "./education";

const Router = () => {
  return <BrowserRouter>
    <Route exact path={"/positions"} component={Positions} />
    <Route exact path={"/skills"} component={SkillsContainer} />
    <Route exact path={"/bio"} component={Bio} />
    <Route exact path={"/education"} component={Education} />
  </BrowserRouter>
}

