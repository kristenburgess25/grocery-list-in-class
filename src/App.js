import React, { Component } from 'react';
import './App.css';
import Grocery from './Grocery';
import GroceryList from './GroceryList';

class App extends Component {
  render() {
    return (
        <GroceryList
          groceryList={[
            {
              id: 1,
              name: 'apples',
              quantity: '10',
              notes: 'need to bake a giant pan of cobbler!'
            },
            {
              id: 2,
              name: 'bananas',
              quantity: '6',
              notes: 'all the potassium! no cramps for me!'
            },
            {
              id: 3,
              name: 'oranges',
              quantity: '4',
              notes: 'Vitamin C is life. Or, at least life without scurvy'
            }
          ]}
          onClear={this.onClearMock}
        />

    );
  }
}

export default App;
