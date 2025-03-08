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

export default function Skills({positions}: {positions: Array<iPosition>}) {
  const languages = new Set(positions.flatMap(p => p.languages));
  const skills = new Set(positions.flatMap(p => p.skills));
  const tools = new Set(positions.flatMap(p => p.tools));
  const frameworks = new Set(positions.flatMap(p => p.frameworks));
  return <Card compact={true} className="row">
    <SkillSection entries={frameworks} title="Frameworks" color="GREEN"/>
    <SkillSection entries={skills} title="Skills" color="GOLD"/>
    <SkillSection entries={languages} title="Languages" color="BLUE"/>
    <SkillSection entries={tools} title="Tools" color="RED"/>
    <AbilityStack<iLanguage>
      title="Languages"
      color="RED"
      entries={positions.flatMap(p => p.languages)} />
    <AbilityStack<iSkill>
      title="Skills"
      color="RED"
      entries={positions.flatMap(p => p.skills)} />
    <AbilityStack<iTool>
      title="Tools"
      color="RED"
      entries={positions.flatMap(p => p.tools)} />
    <AbilityStack<iFramework>
      title="Frameworks"
      color="RED"
      entries={positions.flatMap(p => p.frameworks)} />
  </Card>
}

function AbilityStack<T extends iAbility>({
  entries,
  title,
  color
}: {
  color: string;
  entries: T[];
  title: string;
}) {
  const abilityPanels = entries.map(e => ({
    renderPanel(props) {
      return <div className="ability-panel">{e.name}</div>
    }
  }));
  const [abilityStack, updateStack] = React.useState(abilityPanels);
  return <PanelStack2 className="col-xs-3 position-call-height" stack={abilityStack} />
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