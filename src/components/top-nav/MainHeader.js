import React from "react";
import { ExitToApp as ExitToAppIcon } from "@material-ui/icons";
import "../styles/main-header.css";

export default function MainHeader() {
  return (
    <div className="main-header">
      <h2>Aestetico</h2>
      <ExitToAppIcon />
    </div>
  );
}
