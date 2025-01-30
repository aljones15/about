import React from "react";
import {Card, Tree, TreeNodeInfo} from "@blueprintjs/core";

export default function Projects({projects}) {
  const nodes = [];
  return <Card className="projects">
    <Tree contents={nodes} />
  </Card>
}