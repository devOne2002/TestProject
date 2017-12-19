import React from 'react';
import AddEditStudent from './AddEditStudent';
import StudentList from './StudentList';
import Grid from 'material-ui/Grid';

let id = 0;
function createData(newObject) {
  id += 1;
  name = newObject.firstName + ' ' + newObject.lastName;
  return ({ id, name, Gender:newObject.Gender , Class:newObject.Class});
}

const data = [
    createData({firstName:'Devendra', lastName:'Pandya', Gender:'Male', Class:'Graduate'}),
    createData({firstName:'Balvvant', lastNAme:'Bist', Gender:'Male', Class:'Graduate'}),
    createData({firstName:'Rita', lastName:'Fadnavis', Gender:'Female', Class:'HSC'}),
    createData({firstName:'Lokesh', lastName:'Rock', Gender:'Male', Class:'SSC'}),
    createData({firstName:'Mita', lastName:'Jogle', Gender:'Female', Class:'Eighth'}),
  ];

export default class Students extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            isAddEdit : false
        };
        this.renderAddEditStudent = this.renderAddEditStudent.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(this.state.isAddEdit != nextProps.addEditStudent){
            this.setState({isAddEdit : nextProps.addEditStudent});
        }
    }

    renderAddEditStudent(){
        debugger;
        if(this.state.isAddEdit){
            return (<Grid item  xl="5" lg="5" md="12" sm="12" xs="12" >
                       <AddEditStudent studentObject={this.studentObject}  saveStudent ={this.saveStudent.bind(this)} cancelAddEdit={this.cancelAddEdit.bind(this)}/>
                    </Grid>);
        }
    }

    saveStudent(studentObject){
        data.push(createData(studentObject));
        this.setState({isAddEdit :false});
    }

    cancelAddEdit(){
        this.setState({isAddEdit :false})
    }

    editRow(key){
        debugger;
        this.studentObject = data.filter(x => x.id === key)[0];
        this.setState({isAddEdit:true});
    }    
    
    render(){
        debugger;
        return(
            <Grid container spacing="24">
                <Grid item  xl="7" lg="7" md="12" sm="12" xs="12" >
                    <StudentList  data={data} editRow={this.editRow.bind(this)}/>
                </Grid>
                {this.renderAddEditStudent()}
            </Grid>       
        );
    }
}