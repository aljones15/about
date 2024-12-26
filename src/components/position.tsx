import React from "react";
import {Card, CardList, H5, H6} from "@blueprintjs/core";
import {Position} from '../types';

export default function PositionsElement({positions}: {positions: Array<Position>}) {
  return <div>
    {positions.map(p => <PositionElement key={p.startDate} position={p} />)}
  </div>
}

function PositionElement({position}: {position: Position}): React.ReactElement {
  return  <CardList bordered={true} compact={true}>
    <Card compact={true}>
      <H5 className="col-xs-2">{position.company.name}</H5>
      <H6 className="col-xs-10">{position.jobTitle}</H6>
    </Card>
    <Card compact={true}>
      <div className="col-xs-2">
        <MonthYear date={position.startDate}/> - <MonthYear date={position.endDate} />
      </div>
      <div className="col-xs-10"><Years from={position.startDate} to={position.endDate}/ ></div>
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
  const year = 365 * 24 * 60 * 60 * 1000;
  const years = Math.floor(diff / year);
  return <span>{years} years</span>
}