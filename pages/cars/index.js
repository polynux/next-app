import { Button, Checkbox, Slider, Typography, makeStyles, withStyles } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { useState } from "react";

const marks = [
  { value: 0, label: "0" },
  { value: 100, label: "100" }
];

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

const iOSBoxShadow = "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = withStyles({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0"
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 12px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor"
  }
})(Slider);

export default function CarsList() {
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <>
      <h1>Cars list</h1>
      <Button color="primary" variant="contained">
        Hello
      </Button>
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />
      <div className={classes.root}>
        <Slider
          defaultValue={30}
          value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
          valueLabelDisplay="on"
          marks={marks}
          step={0.1}
        />
        <Typography gutterBottom>iOS</Typography>
        <IOSSlider aria-label="ios slider" defaultValue={60} marks={marks} valueLabelDisplay="on" />
      </div>
    </>
  );
}
