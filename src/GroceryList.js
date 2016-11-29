import React from 'react';
import Grocery from './Grocery'

const GroceryList = ({ groceryList, onClear }) => {
  return (
    <article className="Grocery-list">
      <button className="Grocery-clear"
        disabled={groceryList === [] ? true : false}
        onClick={onClear}>
        Clear Groceries
      </button>

      <h2>Grocery List</h2>

      {groceryList.map(grocery => <Grocery
        key={grocery.id}
        name={grocery.name}
        quantity={grocery.quantity} notes={grocery.notes}
        />
      )};
    </article>
  );
};
export default GroceryList;
