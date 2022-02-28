import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  color: "transparent",
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  "@media all": {
    minHeight: 128,
  },
  input: { color: "black" },
}));

// const useStyles = makeStyles({
//   input: {
//     color: "blue",
//   },
// });

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <StyledToolbar>
          <Typography
            variant="h2"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              alignSelf: "center",
              color: "black",
            }}
          >
            Welcome to the Vehicle Dictionary
          </Typography>
          <Button color="inherit" sx={{ color: "black" }}>
            Login
          </Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
