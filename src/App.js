import React, { Component } from 'react';
import moment from 'moment';
// import logo from './logo.svg';
// import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: {
        value: '',
        date: null,
        time: null
      },
      list: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDatePickerChange = (event, date) => {
    this.setState({ 
      ...this.state,
      todo: {
        ...this.state.todo,
        date
      }
    });
  };

  handleTimePickerChange = (event, time) => {
    this.setState({ 
      ...this.state,
      todo: {
        ...this.state.todo,
        time
      }
    });
  };

  handleInputItem = (event) => {
    this.setState({ 
      ...this.state,
      todo: {
        ...this.state.todo,
        value: event.target.value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('LIST: ', this.state.list);
    console.log('TODO: ', this.state.todo);
    this.setState(
      { list: [...this.state.list, this.state.todo] },
      () => console.log('List after update: ', this.state.list)
    );
  }
  
  render() {
    
    return (
      <MuiThemeProvider>  
        <div
          style={Object.assign({}, style, marginStyle)}
        >
          <AppBar
            title="Add item"
          />
          <div 
            style={marginStyle}
          >
            <TextField
              id="text-field-controlled"
              style={marginStyle}
              value={this.state.todo.value}
              onChange={this.handleInputItem}                           
            />
          </div>
          <div 
            style={marginStyle}
          >
            <DatePicker
              style={marginStyle}          
              floatingLabelText="Ranged Date Picker"
              value={this.state.todo.date}
              onChange={this.handleDatePickerChange}
            />
          </div>
          <div 
            style={marginStyle}
          >
            <TimePicker
              hintText="12hr Format"
              style={marginStyle}
              value={this.state.todo.time}            
              onChange={this.handleTimePickerChange}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }} 
          >
          <br />
            <RaisedButton 
              label="Submit" 
              primary={true} 
              onClick={this.handleSubmit}          
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%'          
              }} 
            />
          </div>
          { this.state.list.map((todo, key) => {
            return (
              <li key={key}>
                <p>Value: {todo.value}</p>
                <p>Date: {moment(todo.date).format('DD-MM-YY HH:mm:ss')}</p>
                <p>Time: {moment(todo.time).format('LTS')}</p>
              </li>
            )
          }) }
        </div>
      </MuiThemeProvider>
    );
  }
  
};

const style = {
  display: 'block',
  float: 'left'
}

const marginStyle = {
  margin: '20px'
}

export default App;
