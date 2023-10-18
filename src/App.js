import './App.css';
import React, { Component } from 'react';
// import FormBuilderComponent from './Builder';
import FormBuilderComponent from './FormBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormBuilderComponent />
      </div>
    );
  }
}

export default App;
