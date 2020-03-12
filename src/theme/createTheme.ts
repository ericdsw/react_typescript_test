import { createMuiTheme } from '@material-ui/core/styles';
import { purple, teal } from '@material-ui/core/colors';
import { PaletteType } from '@material-ui/core';

export default function createTheme(mode : string) {
  return createMuiTheme({
    palette: {
      primary: purple,
      secondary: teal,
      type: mode as PaletteType,
    }
  });
}
