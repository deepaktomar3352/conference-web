import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Grid, Snackbar, TextField } from "@mui/material";
import { DropzoneArea } from "react-mui-dropzone";

// for dropdown
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

// for dialogbox
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

// for Snackbar
function TransitionRight(props) {
  return <Slide  sx={{bgcolor:'green'}} {...props} direction="right" />;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function DialogBox(props) {
  // for snackbar
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleSnackClose = () => {
    setOpen(false);
  };
  // for dialogbox
  const handleClose = () => {
    props.setOpen(false);
  };

  //   for  drop down

  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <React.Fragment>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>We Ready to track it</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={2}>
            <Grid xs={6} item>
                {" "}
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Subject"
                  //   multiline
                  // maxRows={4}
                  sx={{ mt: 2 }}
                />
                </Grid>
              <Grid xs={6} item>
                {" "}
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Description"
                  //   multiline
                  // maxRows={4}
                  sx={{ mt: 2 }}
                />
              </Grid>
              <Grid xs={12} item>
                <div>
                  <FormControl sx={{ width: 535 }}>
                    <InputLabel id="demo-multiple-chip-label">
                      Receivers
                    </InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={
                        <OutlinedInput
                          id="select-multiple-chip"
                          label="Receivers"
                        />
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid xs={12} item>
                <DropzoneArea
                  acceptedFiles={[
                    ".pdf",
                    "application/pdf",
                    ".doc",
                    ".docx",
                    "application/msword",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                  ]}
                  dropzoneText={
                    "Drag and drop a PDF or Word file here or click"
                  }
                  onChange={(files) => console.log("Files:", files)}
                />
              </Grid>
              <Grid xs={6} item>
                <Button
                  onClick={handleClick(TransitionRight)}
                  fullWidth
                  variant="contained"
                  disableElevation
                >
                  Send
                </Button>
                <Box>
                  <Snackbar
                 autoHideDuration={3000}
                    open={open}
                    onClose={handleSnackClose}
                    TransitionComponent={transition}
                    message="Document has been sent"
                    key={transition ? transition.name : ""}
                  />
                </Box>
              </Grid>
              <Grid xs={6} item>
                <Button
                  onClick={() => handleClose()}
                  fullWidth
                  variant="contained"
                  disableElevation
                >
                  Cancle
                </Button>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
