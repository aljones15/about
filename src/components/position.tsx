import React from "react";
import {Card, CardList, Callout, Colors, Tag, H5, H6, UL} from "@blueprintjs/core";
import {Position} from '../types';

const callHeight = "8rem";
export default function PositionsElement({positions}: {positions: Array<Position>}) {
  return <div>
    {positions.map(p => <PositionElement key={p.startDate} position={p} />)}
  </div>
}

function PositionElement({position}: {position: Position}): React.ReactElement {
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

function MonthYear({date}: {date: string}): React.ReactElement {
  const month = new Date(date).toLocaleString('default', {month: 'long'});
  const year = new Date(date).getFullYear();
  return <span>{month} {year}</span>
}

function Years({from, to}: {from: string, to: string}): React.ReactElement {
  const dates = {from: new Date(from), to: new Date(to)};
  const diff = dates.to.getTime() - dates.from.getTime();
  const month = 30 * 24 * 60 * 60 * 1000;
  const year = 365 * 24 * 60 * 60 * 1000;
  const years = Math.floor(diff / year);
  const months = Math.ceil((diff - years * year)/ month)
  if(months <= 0) {
    return <Tag><Plural text="year" num={years}/></Tag>
  }
  return <span>
    <Tag><Plural text="year" num={years}/></Tag>
    <Tag><Plural text="month" num={months}/></Tag>
  </span>
}

function Plural({text, num}: {text: string, num: number}) {
  if(num <= 1) {
    return <span>{num} {text}</span>
  }
  return <span>{num} {text}s</span>
}