import {andrewResume} from "../data/"
import React from "react";
import ResumeContainer from "./resume";

export function App() {
  return <ResumeContainer resume={andrewResume} />;
}
