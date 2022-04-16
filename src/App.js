import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <form>
        <Form />
        <Card />
      </form>
    );
  }
}

export default App;
