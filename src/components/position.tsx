import React from "react";
import {Card, CardList, H5, H6} from "@blueprintjs/core";
import {Position} from '../types';

export default function PositionsElement({positions}: {positions: Array<Position>}) {
  return <div>
    <CardList>
    {positions.map(p => <PositionElement key={p.startDate} position={p} />)}
    </CardList>
  </div>
}

function PositionElement({position}: {position: Position}): React.ReactElement {
  return <Card>
      <H5>{position.company.name}</H5>
      <H6>{position.jobTitle}</H6>
      {position.startDate}
  </Card>
}