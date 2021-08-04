import './App.css';
import Container from './Components/Container';
import Grid from './Components/Grid';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [score, setscore] = useState(0)
  const [stage, setstage] = useState(8);
    function scorehandler(x){
        setscore(score+x);
    }
    console.log(stage);
  return (
    <div className="App">
      {/* <h1 style={{margin:"0",marginBottom:"2px"}} >Minesweeper</h1> */}
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Level</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={stage}
          onChange={(e)=>setstage(e.target.value)}
          label="Age"
        >
          <MenuItem value={4}>Easy</MenuItem>
          <MenuItem value={8}>Medium</MenuItem>
          <MenuItem value={12}>Hard</MenuItem>
        </Select>
      </FormControl>
      <Grid scorefn={scorehandler} score={score} sz={stage} />
    </div>
  );
}

export default App;
