import React from "react";
import {Breadcrumbs, Card, Tree, TreeNodeInfo} from "@blueprintjs/core";
import { Framework } from "./frameworks";
import { Language } from "./languages";
import { Skill } from "./skills";
import { Tool } from "./tools";

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
    icon: "application",
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
      childNodes: [{
        id: project.name + "skills",
	key: project.name + "skills",
	label: <div>{project.skills.map(skill => <Skill
	  key={project.name + skill.name}
	  skill={skill} />
	)}</div>
      }],
      icon: "exchange"
    }, {
      id: "project-frameworks",
      key: project.name + project.frameworks.join(""),
      isExpanded: false,
      label: "Frameworks",
      childNodes: [{
        id: project.name + "fws",
	key: project.name + "fws",
	label: <div>{project.frameworks.map(fw => <Framework
	  key={project.name + fw.name}
	  framework={fw} />
	)}</div>
      }],
      icon: "package"
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