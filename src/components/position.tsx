import React from "react";
import {Card, CardList, Callout, Colors, Tag, H5, H6, UL} from "@blueprintjs/core";
import { Framework } from "./frameworks";
import {iPosition} from '../types';
import MonthYear from "./monthYear";
import Years from "./Years";
import Tool from "./tools";
import Language from "./languages";
import {Skill} from "./skills";

export default function Positions({positions}: {positions: Array<iPosition>}) {
  return <div className="positions">
    {positions.map(p => <Position key={p.startDate} position={p} />)}
  </div>
}

function Position({position}: {position: iPosition}): React.ReactElement {
  return  <CardList bordered={true} compact={true}>
    <Card compact={true}>
      <Callout className="col-xs-3 position-call-height" intent="primary">
        <H5>
	    {position.company.name}
	    </H5>
        <H6>
	    {position.jobTitle}
	    </H6>
        <MonthYear date={position.startDate}/> - <MonthYear date={position.endDate} />
	    <br />
        <Years from={position.startDate} to={position.endDate} />
      </Callout>
      <Callout className="position-call-height">
        <H5>Languages</H5>
	{position.languages.map(l => <Language key={l.name} language={l} />)}
        <H5>Tools</H5>
          {position.tools.map(t => <Tool key={t.name} tool={t} />)}
      </Callout>
      <Callout className="position-call-height">
        <H5>Frameworks</H5>
	{position.frameworks.map(f => <Framework framework={f} key={f.name} />)}
        <H5>Skills</H5>
          {position.skills.map(s => <Skill key={s.name} skill={s} />)}
      </Callout>
    </Card>
    <Card compact={true}>
      <Callout intent="success">
        <H5>Duties</H5>
	<UL>
          {position.duties.map(d => <li key={d}>{d}</li>)}
        </UL>
      </Callout>
    </Card>
  </CardList>
}