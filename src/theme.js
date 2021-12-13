import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { dark } from "@material-ui/core/styles/createPalette";

export const theme = createTheme({
    palette: {
        primary: {
            main: grey[50],
        },
    },
});
