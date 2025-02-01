import React from "react";
import { Colors, Tag } from "@blueprintjs/core";
import { iTool } from "../types";

export default function Tool({tool}: {tool: iTool}) {
  return <Tag
    round={true}
    style={{background: Colors.GOLD2}}>
    {tool.name}
  </Tag>
}