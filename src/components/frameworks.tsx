import React from "react";
import { Colors, Tag } from "@blueprintjs/core";
import { iFramework } from "../types";

export function Framework({framework}: {framework: iFramework}) {
  return <Tag
    className="margin-lr-1px"
    round={false}
    style={{background: Colors.BLUE3}}>
      {framework.name}
  </Tag>
}