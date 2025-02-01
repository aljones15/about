import React from "react";
import { Colors, Tag} from "@blueprintjs/core";
import { iLanguage } from "../types";

export default function Language({language}: {language: iLanguage}) {
  return <Tag
    round={true}
    style={{background: Colors.BLUE3}}
    className="margin-lr-1px">
  {language.name}
  </Tag>
}