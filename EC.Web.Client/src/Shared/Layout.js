import React from 'react';
import Header from './Header'
import Students from '../Student/Students';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addNew :false
        }
        this.addNew = false;
        this.addNewStudent = this.addNewStudent.bind(this);
    }
    addNewStudent(){
        this.setState({
            addNew : true
        })
    }

    
    render(){
        return (
            <div>
                <Header     addNewStudent={this.addNewStudent}/>
                <Students addEditStudent = {this.state.addNew} />
            </div>
        );
    }
}
