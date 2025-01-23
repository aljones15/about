import React from "react";
import {Card, Tree, TreeNode} from "@blueprintjs/core";

export default function Projects({projects}) {
  return <div className="projects">
    {projects.map(project => <Card key={project.name}>
      {project.name}
    </Card>)}
  </div>
}