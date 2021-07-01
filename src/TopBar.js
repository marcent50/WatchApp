import classes from "./TopBar.module.css";
import React from "react";

export const TopBar = () => {
  return (
    <header>
      <nav className={classes.Topbar}>
        <img
          src="https://i.dlpng.com/static/png/197684_preview.png"
          alt="Amazon Logo"
        />
      </nav>
    </header>
  );
};
