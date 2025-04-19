import React from "react";
import {
  Button,
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
    <AbilityStack<iLanguage>
      title="Languages"
      color="RED"
      entries={[...languages]} />
    <AbilityStack<iSkill>
      title="Skills"
      color="RED"
      entries={[...skills]} />
    <AbilityStack<iTool>
      title="Tools"
      color="RED"
      entries={[...tools]} />
    <AbilityStack<iFramework>
      title="Frameworks"
      color="RED"
      entries={[...frameworks]} />
  </Card>
}

const directions = {
  forward: 1,
  backward: -1
};

function AbilityStack<T extends iAbility>({
  entries,
  title,
  color
}: {
  color: string;
  entries: T[];
  title: string;
}) {
  const abilityPanels = entries.map((e, index) => ({
    renderPanel(props) {
      const nextIndex = abilityPanels[index + directions.forward] ?
        index + directions.forward : 0;
      const next = abilityPanels[nextIndex];
      const previousIndex = abilityPanels[index + directions.backward] ?
        index + directions.backward : entries.length - 1;
      const previous = abilityPanels[previousIndex];
      return <Card className="ability-panel">
        <div className="row">
	  <Button
	    className="col-xs-6"
	    icon="arrow-left"
	    onClick={() => props.openPanel(previous)}
	    text={previous.props.entry.name} />
	  <Button
	    className="col-xs-6"
	    rightIcon="arrow-right"
	    text={next.props.entry.name}
	    onClick={() => props.openPanel(next)} />
	</div>
        <h4 className="text-center" style={{color: Colors.BLACK}}>
	  {title}
	</h4>
        {e.name}
      </Card>
    },
    title,
    props: {entry: e, index}
  }));
  const [abilityStack, updateStack] = React.useState(abilityPanels);
  const handleClose = (params) => {
      const [head, ...tail] = abilityStack;
      updateStack([...tail, head]);
  };
  const handleOpen = (nextPanel) => {
    const rest = abilityStack.filter(p => p != nextPanel);
    updateStack([...rest, nextPanel]);
  }
  return <PanelStack2
    className="col-xs-3 v-height-100"
    onClose={handleClose}
    onOpen={handleOpen}
    showPanelHeader={false}
    stack={abilityStack} />
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