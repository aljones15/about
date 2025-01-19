import React from "react";
import {Tag} from "@blueprintjs/core";

export default function Years({from, to}: {from: string, to: string}): React.ReactElement {
  const dates = {from: new Date(from), to: new Date(to)};
  const diff = dates.to.getTime() - dates.from.getTime();
  const month = 30 * 24 * 60 * 60 * 1000;
  const year = 365 * 24 * 60 * 60 * 1000;
  const years = Math.floor(diff / year);
  const months = Math.ceil((diff - years * year)/ month)
  if(months <= 0) {
    return <Tag><Plural text="year" num={years}/></Tag>
  }
  return <span>
    <Tag><Plural text="year" num={years}/></Tag>
    <Tag><Plural text="month" num={months}/></Tag>
  </span>
}

function Plural({text, num}: {text: string, num: number}) {
  if(num <= 1) {
    return <span>{num} {text}</span>
  }
  return <span>{num} {text}s</span>
}