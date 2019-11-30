import { red } from "@material-ui/core/colors";

const themesConfig = {
  default: {
    palette: {
      type: "light",
      primary: { main: "#246fa1" },
      secondary: { main: "#349fd6" },
      error: red
    },
    status: {
      danger: "orange"
    }
  }
};

export default themesConfig;
