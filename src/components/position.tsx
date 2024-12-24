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
      <H5 className="col-xs-4">{position.company.name}</H5>
      <H6 className="col-xs-8">{position.jobTitle}</H6>
    </Card>
    <Card compact={true}>
      <div className="col-xs-4">From: {position.startDate}</div>
      <div className="col-xs-8">To: {position.endDate}</div>
    </Card>
  </CardList>
}