import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>React Track Runner</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
