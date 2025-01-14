import React from "react";
import {Callout, CardList, Card, Colors} from "@blueprintjs/core";
import {Position} from "../types";

export default function Skills({positions}: {positions: Array<Position>}) {
  const languages = new Set(positions.flatMap(p => p.languages));
  const skills = new Set(positions.flatMap(p => p.skills));
  const tools = new Set(positions.flatMap(p => p.tools));
  const frameworks = new Set(positions.flatMap(p => p.frameworks));
  return <Card compact={true} className="row">
    <SkillSection entries={languages} title="Languages" color="BLUE"/>
    <SkillSection entries={skills} title="Skills" color="GOLD"/>
    <SkillSection entries={tools} title="Tools" color="RED"/>
    <SkillSection entries={frameworks} title="Frameworks" color="GREEN"/>
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
  return <CardList
    bordered={false}
    className="col-xs-3"
    style={{background: Colors[`${color}3`]}}>
    <h5>{title}</h5>
      {[...entries].map(e => <Card
        style={{background: Colors[`${color}4`]}}
        key={e.name}>
        <Callout
	  style={{background: Colors[`${color}5`]}}
	  title={e.name}>
          {e.experience} years
	</Callout>
      </Card>)}
  </CardList>
}
