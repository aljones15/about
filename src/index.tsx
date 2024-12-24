// aljones15/about homepage
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
// include blueprint-icons.css for icon font support
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "flexboxgrid/css/flexboxgrid.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);