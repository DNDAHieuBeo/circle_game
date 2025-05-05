
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#000",
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

export default theme;
