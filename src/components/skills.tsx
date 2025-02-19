import React from "react";
import {
  Button,
  Callout, CardList,
  Card, Colors,
  PanelStack,
  PanelStack2,
  type Panel,
  type PanelProps,
  Tag
 } from "@blueprintjs/core";
import {iAbility, iPosition, iSkill, iFramework, iLanguage, iTool} from "../types";

const testPanel: Panel<object> = {
  props: {foo: true},
  renderPanel: (props) => {
    return <Button text="Text" />
  },
  title: "I.P.",
  htmlTitle: "Test Panel"
}

const testComp = () => <Button text="TEST" />

export default function Skills({positions}: {positions: Array<iPosition>}) {
  const languages = new Set(positions.flatMap(p => p.languages));
  const skills = new Set(positions.flatMap(p => p.skills));
  const tools = new Set(positions.flatMap(p => p.tools));
  const frameworks = new Set(positions.flatMap(p => p.frameworks));
  const [stack, updateStack] = React.useState([testPanel]);
  return <Card compact={true} className="row">
  {/*
    <SkillSection entries={frameworks} title="Frameworks" color="GREEN"/>
    <SkillSection entries={skills} title="Skills" color="GOLD"/>
    <SkillSection entries={languages} title="Languages" color="BLUE"/>
    <SkillSection entries={tools} title="Tools" color="RED"/>
  */}
  <PanelStack2 stack={stack} showPanelHeader={false} renderActivePanelOnly={true} />
  </Card>
}

interface iPanel<T extends object>{
  entries: Set<T>;
  title: string;
  color: string;
};

const AbilityPanel: React.FC<PanelProps<object>> = props => {
  return (<div>Panel Test</div>);
}



function AbilityPanels<T extends object>({
  entries,
  title,
  color
}: iPanel<T>) {
  const [initialPanel, ...stack]: Panel<object>[] = [...entries].map(
    (entry: T, index: number): Panel<object> => ({
    props: {entry},
    renderPanel: AbilityPanel,
    title: `Panel Test ${index}`
  }));
  return <PanelStack2
    showPanelHeader={true}
    initialPanel={testPanel}
    stack={stack}
  />
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