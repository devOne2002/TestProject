import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });
  


  
  

class StudentList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Paper className={this.props.classes.root}>
            <Table className={this.props.classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell numeric>Student Id</TableCell>
                  <TableCell string>Name</TableCell>
                  <TableCell string>Gender</TableCell>
                  <TableCell numeric>Class</TableCell>
                </TableRow>
              </TableHead>  
              <TableBody>
                {this.props.data.map(n => {
                  return (
                    <TableRow key={n.id} onClick={() => {this.props.editRow(n.id)} }>
                      <TableCell numeric>{n.id}</TableCell>
                      <TableCell string>{n.name}</TableCell>
                      <TableCell string>{n.Gender}</TableCell>
                      <TableCell numeric>{n.Class}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        );
    }
}

export default withStyles(styles)(StudentList);