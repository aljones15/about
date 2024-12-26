import React from "react";
import {Position} from "../types";

export default function Skills({positions}: {positions: Array<Position>}) {
  const languages = new Set(positions.flatMap(p => p.languages));
  const skills = new Set(positions.flatMap(p => p.skills));
  const tools = new Set(positions.flatMap(p => p.tools));
  const frameworks = new Set(positions.flatMap(p => p.frameworks));
  console.log({
    skills, tools, frameworks
  });
  return <div>
    <SkillSection entries={languages} title="Languages" />
    <SkillSection entries={skills} title="Skills" />
    <SkillSection entries={tools} title="Tools" />
    <SkillSection entries={frameworks} title="Frameworks" />
  </div>
}

function SkillSection({entries, title}: {entries: Set<{name: string, experience: number}>, title: string}) {
  return <div>
    <h5>{title}</h5>
    <ul>
      {[...entries].map(e => <li key={e.name}>{e.name} {e.experience}</li>)}
    </ul>
  </div>
}