import React from "react";
import {
  Callout, CardList,
  Card, Colors,
  PanelStack2,
  type Panel,
  type PanelProps,
  Tag
 } from "@blueprintjs/core";
import {iAbility, iPosition, iSkill, iFramework, iLanguage, iTool} from "../types";
import { PanelStack2Example } from "./panelStack";

const panel1 = props => <div className="panel-1-test">Panel 1</div>
const panel2 = props => <div className="panel-2-test">Panel 2</div>

const panels = [panel1, panel2].map(renderPanel => ({
  renderPanel
  })
);

export default function Skills({positions}: {positions: Array<iPosition>}) {
  const languages = new Set(positions.flatMap(p => p.languages));
  const skills = new Set(positions.flatMap(p => p.skills));
  const tools = new Set(positions.flatMap(p => p.tools));
  const frameworks = new Set(positions.flatMap(p => p.frameworks));
  const [stack, updateStack] = React.useState(panels);
  return <Card compact={true} className="row full-height">
    <SkillSection entries={frameworks} title="Frameworks" color="GREEN"/>
    <SkillSection entries={skills} title="Skills" color="GOLD"/>
    <SkillSection entries={languages} title="Languages" color="BLUE"/>
    <SkillSection entries={tools} title="Tools" color="RED"/>
    <PanelStack2 className="col-xs-3 position-call-height" stack={stack} />
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
  const skills = [...entries].sort((a, b) => b.experience - a.experience);
  return <CardList
    bordered={false}
    className="col-xs-3"
    style={{background: Colors[`${color}3`] + '08'}}>
    <h4 style={{textAlign: 'center', color: Colors.BLACK}}>{title}</h4>
      {skills.map(e => <Card
        style={{background: Colors[`${color}4`] + '0f'}}
        key={e.name}>
        <Callout
	  style={{background: Colors[`${color}5`] + '80'}}
	  title={e.name}>
          {e.experience} years
	</Callout>
      </Card>)}
  </CardList>
}

export function Skill({skill}: {skill: iSkill}) {
  return <Tag
    className="margin-lr-1px"
    style={{background: Colors.GOLD2}}
    round={false}>
    {skill.name}
  </Tag>
}