import React from "react";
import {Card, Tree, TreeNodeInfo} from "@blueprintjs/core";

export default function Projects({projects}) {
  const initialNodes = projects.map(project => ({
    id: project.name,
    key: project.name,
    isExpanded: true,
    label: project.name,
    icon: "archive",
    childNodes: [{

    }]
  }));
  const [nodes, dispatch] = React.useReducer(projectReducer, initialNodes);
  return <Card className="projects">
    <Tree
      contents={nodes} />
  </Card>
}

function projectReducer(state: TreeNodeInfo[]) {
  return state;
}