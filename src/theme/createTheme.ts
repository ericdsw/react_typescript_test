import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { purple, teal } from "@material-ui/core/colors";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

// Custom theme module parameter definition
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties["width"];
      breakPoint: Breakpoint;
    };
  }

  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties["width"];
      breakPoint?: Breakpoint;
    };
    palette?: PaletteOptions;
  }
}

export default function createTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...options,
    appDrawer: {
      width: 225,
      breakPoint: "lg"
    },
    palette: {
      primary: purple,
      secondary: teal,
      type: "dark",
      ...options.palette
    }
  });
}
