import React, { Component } from 'react';
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
      item: '',
      date: null,
      time: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDatePickerChange = (event, date) => {
    this.setState({ date });
  };

  handleTimePickerChange = (event, time) => {
    this.setState({ time });
  };

  handleInputItem = (event) => {
    this.setState({ item: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted...');
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
              value={this.state.item}
              onChange={this.handleInputItem}                           
            />
          </div>
          <div 
            style={marginStyle}
          >
            <DatePicker
              style={marginStyle}          
              floatingLabelText="Ranged Date Picker"
              value={this.state.date}
              onChange={this.handleDatePickerChange}
            />
          </div>
          <div 
            style={marginStyle}
          >
            <TimePicker
              hintText="12hr Format"
              style={marginStyle}
              value={this.state.time}            
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
              onChange={this.handleSubmit}          
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%'          
              }} 
            />
          </div>
          {}
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
