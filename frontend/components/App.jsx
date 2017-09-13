import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WordGenerator from './word_generator';

class App extends Component {

  render() {
    console.log("app");
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to RandomWordGeneratorAPI</h2>
        </div>
        <WordGenerator />
      </div>
    );
  }
}

export default App;
