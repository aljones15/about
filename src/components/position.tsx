import React from "react";
import {Card, CardList, Callout, Colors, Tag, H5, H6, UL} from "@blueprintjs/core";
import {iPosition} from '../types';
import MonthYear from "./monthYear";
import Years from "./Years";

const callHeight = "8rem";
export default function PositionsElement({positions}: {positions: Array<iPosition>}) {
  return <div>
    {positions.map(p => <PositionElement key={p.startDate} position={p} />)}
  </div>
}

function PositionElement({position}: {position: iPosition}): React.ReactElement {
  return  <CardList bordered={true} compact={true}>
    <Card compact={true}>
      <Callout className="col-xs-3" intent="primary" style={{height: callHeight}}>
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
      <Callout style={{height: callHeight}}>
        <H5>Languages</H5>
	{position.languages.map(l => <Tag
	  round={true}
	  style={{background: Colors.BLUE3}}
	  key={l.name}>
	    {l.name}
	  </Tag>)}
        <H5>Tools</H5>
          {position.tools.map(t => <Tag
	    round={true}
	    style={{background: Colors.GOLD2}}
	    key={t.name}>
	    {t.name}
	  </Tag>)}
      </Callout>
      <Callout style={{height: callHeight}}>
        <H5>Frameworks</H5>
	{position.frameworks.map(l => <Tag
	  style={{background: Colors.BLUE3}}
	  key={l.name}>
	  {l.name}
	</Tag>)}
        <H5>Skills</H5>
          {position.skills.map(t => <Tag
	    style={{background: Colors.GOLD2}}
	    key={t.name}>
	    {t.name}
	  </Tag>)}
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