import React from "react";

export default function MonthYear({date}: {date: string}): React.ReactElement {
  const month = new Date(date).toLocaleString('default', {month: 'long'});
  const year = new Date(date).getFullYear();
  return <span>{month} {year}</span>
}