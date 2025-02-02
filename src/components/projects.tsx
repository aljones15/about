import React from "react";
import {Breadcrumbs, Card, Tree, TreeNodeInfo} from "@blueprintjs/core";
import { Framework } from "./frameworks";
import { Language } from "./languages";
import { Skill } from "./skills";
import { Tool } from "./tools";
import { iProject } from "../types";

type NodePath = number[];

type ProjectAction =
  {
    type: "EXPAND_PROJECT";
    payload: {
      path: NodePath;
    }
  } | {
    type: "COLLAPSE_PROJECT";
    payload: {
      path: NodePath;
    }
  };

export default function Projects({projects}) {
  return <div>
    {projects.map(project => <ProjectCard
      key={project.name}
      project={project} />)}
  </div>
}

function ProjectCard({project}) {
  const [nodes, dispatch] = React.useReducer(projectReducer, [createInitialNode(project)]);
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

function createInitialNode(project: iProject): TreeNodeInfo {
  return {
    id: project.name,
    isExpanded: true,
    label: project.name,
    icon: "application",
    childNodes: [{
      id: "project-description",
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
      isExpanded: false,
      label: "Skills",
      icon: "exchange",
      childNodes: [{
        id: project.name + "skills",
	label: <div>{project.skills.map(skill => <Skill
	  key={project.name + skill.name}
	  skill={skill} />
	)}</div>
      }]
    }, {
      id: "project-frameworks",
      isExpanded: false,
      label: "Frameworks",
      icon: "package",
      childNodes: [{
        id: project.name + "fws",
	label: <div>{project.frameworks.map(fw => <Framework
	  key={project.name + fw.name}
	  framework={fw} />
	)}</div>
      }]
    }, {
      id: project.name + "languages",
      isExpanded: false,
      label: "Languages",
      icon: "translate",
      childNodes: [{
        id: project.name + "languages",
	label: <div>{project.languages.map(l => <Language
	  key={project.name + l.name}
	  language={l} />
	)}</div>
      }]
    }, {
      id: project.name + "tools",
      isExpanded: false,
      label: "Tools",
      icon: "wrench",
      childNodes: [{
        id: project.name + "tools",
	label: <div>
	  {project.tools.map(t => <Tool key={project.name + t.name} tool={t} />)}
	</div>
      }]
    }]
  }
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