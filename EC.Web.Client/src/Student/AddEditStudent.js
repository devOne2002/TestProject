import React from 'react';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Radio, { RadioGroup } from 'material-ui/Radio';

export default class AddEditStudent extends React.Component{
    constructor(props){
        super(props)
        debugger;
        this.state = {
            class: this.props.studentObject.Gender === undefined ? '' : this.props.studentObject.Gender,
            gender:this.props.studentObject.Class === undefined ? '' : this.props.studentObject.Class,
            firstName:this.props.studentObject.firstName === undefined ? '' : this.props.studentObject.firstName,
            lastName:this.props.studentObject.lastName === undefined ? '' : this.props.studentObject.lastName
          }

    }
    
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleDropdownChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleRadioChange(event, value) {
        this.setState({ value })
    }

    onSaveClick(){
        var studentObject={firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            Gender: this.state.gender,
                            Class: this.state.class };
        this.props.saveStudent(studentObject);

    }

    render(){
        debugger;
        return(
                <Grid container spacing={24}>
                    <Grid item  xl="6" lg="6" md="12" sm="12" xs="12" >
                        <TextField  id="firstName" label="First Name"  value={this.state.firstName} onChange={this.handleChange.bind(this)} margin="normal"/>
                    </Grid>
                    <Grid item  xl="6" lg="6" md="12" sm="12" xs="12" >
                        <TextField  id="lastName" label="Last Name"  value={this.state.lastName} onChange={this.handleChange.bind(this)} margin="normal"/>
                    </Grid>
                    <Grid item  xl="6" lg="6" md="12" sm="12" xs="12" >
                            <FormControl >
                            <InputLabel htmlFor="class">Class</InputLabel>  
                            <Select value={this.state.class} onChange={this.handleDropdownChange.bind(this)} input={<Input name="class" id="class"/>} autoWidth>
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={10}>First</MenuItem>
                                <MenuItem value={20}>Second</MenuItem>
                                <MenuItem value={30}>Third</MenuItem>
                                <MenuItem value={30}>Fourth</MenuItem>
                                <MenuItem value={30}>Sixth</MenuItem>
                                <MenuItem value={30}>Eighth</MenuItem>
                                <MenuItem value={30}>SSC</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item  xl="6" lg="6" md="12" sm="12" xs="12" >
                        <FormControl component="fieldset" required error >
                                <FormLabel component="legend">Gender</FormLabel>
                                <RadioGroup aria-label="gender" name="gender2"  value={this.state.value} onChange={this.handleRadioChange.bind(this)}>
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                </RadioGroup>
                            </FormControl>
                    </Grid>
                    <Grid item  xl="6" lg="6" md="12" sm="12" xs="12" >
                        <Button raised color="primary" onClick={this.onSaveClick.bind(this)}>Save</Button>  
                        <Button raised color="secondary" onClick={()=> {this.props.cancelAddEdit()}}>Cancel</Button>  
                    </Grid>
                </Grid>
        );
    }
}
