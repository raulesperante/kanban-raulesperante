// @ts-nocheck
import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#E63A16",
      contrastText: "#fff",
    },
    secondary: {
      main: "#3f6db2",
    },
    danger: {
      main: "#ff0000",
      contrastText: "#fff",
    },
    background: {
      default: "#ececec",
    },
    btnCancel: {
      main: "#6c757d",
      contrastText: "white",
    },
    btnPrimary: {
      main: "#3f6db2",
      contrastText: "#fff",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
