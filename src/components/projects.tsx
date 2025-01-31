import React from "react";
import {Breadcrumbs, Card, Tree, TreeNodeInfo} from "@blueprintjs/core";

type NodePath = number[];

type ProjectAction =
  | {
    type: "EXPAND_PROJECT";
    payload: {
      path: NodePath;
    }
  }
  | {
    type: "COLLAPSE_PROJECT";
    payload: {
      path: NodePath;
    }
  };

export default function Projects({projects}) {
  const initialNodes = structuredClone(projects).map(project => ({
    id: project.name,
    key: project.name,
    isExpanded: true,
    label: project.name,
    icon: "archive",
    childNodes: [{
      id: "project-description",
      key: project.description.join(""),
      isExpanded: true,
      label: "Description",
      icon: "comment",
      childNodes: project.description.map(d => ({
        id: d,
	key: d,
	label: d,
	icon: "symbol-circle"
      }))
    }, {
      id: "project-skills",
      key: project.name + project.skills.join(""),
      isExpanded: false,
      label: "Skills",
      childNodes: project.skills.map(skill => ({
        id: project.name + skill.name,
	key: project.name + skill.name,
	label: skill.name,
	icon: "symbol-circle"
      })),
      icon: "exchange"
    }]
  }));
  const [nodes, dispatch] = React.useReducer(projectReducer, initialNodes);
  return <Card className="projects">
    <Tree
      onNodeExpand={(n, path: NodePath) => dispatch({
        type: "EXPAND_PROJECT",
	payload:{path}
      })}
      onNodeCollapse={(n, path: NodePath) => dispatch({
        type: "COLLAPSE_PROJECT",
	payload: {path}
      })}
      contents={nodes} />
  </Card>
}

function projectReducer(state: TreeNodeInfo[], action: ProjectAction) {
  // copy the state
  const newState = [...state];
  switch(action.type) {
    case "COLLAPSE_PROJECT": {
      const node = visitor(newState, action.payload.path);
      node.isExpanded = false;
      return newState;
    }
    case "EXPAND_PROJECT": {
      const node = visitor(newState, action.payload.path);
      node.isExpanded = true;
      return newState;
    }
    default:
      return newState;
  }
}

// visits nodes and returns the final node in the NodePath
function visitor(state: TreeNodeInfo[], path: NodePath) {
  const [head, ...tail] = path;
  const node = state[head];
  if(tail.length <= 0) {
    return node;
  }
  return visitor(node.childNodes, tail);
}