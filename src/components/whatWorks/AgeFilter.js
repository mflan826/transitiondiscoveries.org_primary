import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const CustomSlider = withStyles({
  root: {
    color: '#9fca46',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#9fca46',
    border: '2px solid currentColor',
    marginTop: -10,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
    borderRadius: 2,
  },
  rail: {
    height: 4,
    borderRadius: 2,
  },
})(Slider);

const marks = [
  {
    value: 13,
    label: '< 14',
  },
  {
    value: 14,
    label: '14',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 16,
    label: '16',
  },
  {
    value: 17,
    label: '17',
  },
  {
    value: 18,
    label: '18',
  },
  {
    value: 19,
    label: '19',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 21,
    label: '21',
  },
  {
    value: 22,
    label: '22',
  },
  {
    value: 23,
    label: '23',
  },
  {
    value: 24,
    label: '24',
  },
  {
    value: 25,
    label: '25',
  },
  {
    value: 26,
    label: '> 25',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([13, 26]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    props.ageFilterCallback(newValue);
    
  };

  return (
    <div className={classes.root}>
      {/* <Typography id="range-slider" gutterBottom>
          Age Range
      </Typography> */}
      <CustomSlider
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
        min={13}
        step={1}
        max={26}
        scale={(x) => x ** 1}
        valueLabelDisplay="off"

      />
    </div>
  );
}
