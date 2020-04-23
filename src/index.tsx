import React from "react";
import ReactDom from "react-dom";

/* styles */
import "normalize.css";
import "@/styles/global.scss";

/* component */
import App from "@/App";

ReactDom.render(<App />, document.getElementById("app"));
