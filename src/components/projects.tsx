import React from "react";
import {Card, Tree, TreeNodeInfo} from "@blueprintjs/core";

type NodePath = number[];

type ProjectAction =
  | {
    type: "EXPAND_PROJECT";
    payload: {
      path: NodePath;
      isExpanded: boolean
    }
  }
  | {
    type: "COLLAPSE_PROJECT";
    payload: {
      path: NodePath;
      isExpanded: boolean
    }
  };

export default function Projects({projects}) {
  const initialNodes = projects.map(project => ({
    id: project.name,
    key: project.name,
    isExpanded: true,
    label: project.name,
    icon: "archive",
    childNodes: [{
      id: "project-description",
      key: project.description.join(""),
      isExpanded: false,
      label: "Description",
      icon: "comment"
    }]
  }));
  const [nodes, dispatch] = React.useReducer(projectReducer, initialNodes);
  return <Card className="projects">
    <Tree
      onNodeExpand={(n, path: NodePath) => dispatch({
        type: "EXPAND_PROJECT",
	payload: {
	  isExpanded: true,
	  path
	}
      })}
      onNodeCollapse={(n, path: NodePath) => dispatch({
        type: "COLLAPSE_PROJECT",
	payload: {
          isExpanded: false,
	  path
        }
      })}
      contents={nodes} />
  </Card>
}

function projectReducer(state: TreeNodeInfo[], action: ProjectAction) {
  // copy the state
  const newState = structuredClone(state);
  switch(action.type) {
    case "COLLAPSE_PROJECT": {
      return newState;
    }
    case "EXPAND_PROJECT": {
      return newState;
    }
    default:
      return newState;
  }
}

function visitor(state: TreeNodeInfo[], path: NodePath) {

}