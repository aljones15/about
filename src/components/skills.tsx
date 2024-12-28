import React from "react";
import {Card, Callout, Colors} from "@blueprintjs/core";
import {Position} from "../types";

export default function Skills({positions}: {positions: Array<Position>}) {
  const languages = new Set(positions.flatMap(p => p.languages));
  const skills = new Set(positions.flatMap(p => p.skills));
  const tools = new Set(positions.flatMap(p => p.tools));
  const frameworks = new Set(positions.flatMap(p => p.frameworks));
  return <Card compact={true} className="row">
    <SkillSection entries={languages} title="Languages" color={Colors.BLUE5}/>
    <SkillSection entries={skills} title="Skills" color={Colors.GOLD5}/>
    <SkillSection entries={tools} title="Tools" color={Colors.RED5}/>
    <SkillSection entries={frameworks} title="Frameworks" color={Colors.ORANGE5}/>
  </Card>
}

function SkillSection({
  entries,
  title,
  color
}: {
  entries: Set<{name: string, experience: number}>,
  title: string,
  color: string
}) {
  return <Callout className="col-xs-5" style={{background: color}}>
    <h5>{title}</h5>
    <ul>
      {[...entries].map(e => <li key={e.name}>{e.name} {e.experience}</li>)}
    </ul>
  </Callout>
}
