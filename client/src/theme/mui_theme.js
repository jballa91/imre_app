import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9B97AF",
      main: "#67627F",
      dark: "#3D3A4B",
    },
    secondary: {
      light: "#CDBEB7",
      main: "#937666",
      dark: "#483932",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "#FFF",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#b2ff59",
          borderWidth: "2px",
        },
      },
      input: {
        color: "#FFF",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#FFF",
      },
    },
  },
});

export default theme;
