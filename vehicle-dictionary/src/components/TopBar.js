import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";

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

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const [open, setOpen] = React.useState(false);
// const handleOpen = () => setOpen(true);
// const handleClose = () => setOpen(false);

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
          <Button
            color="inherit"
            sx={{ color: "black" }}
            // onClick={handleOpen}>
          >
            Login
          </Button>
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal> */}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
