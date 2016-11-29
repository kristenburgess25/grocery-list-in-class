
import React from 'react';
import { shallow, mount } from 'enzyme';
import GroceryList from './GroceryList';

describe('groceryList', () => {
  it('shows all of the groceries', () => {
    const wrapper = mount(
      <GroceryList groceryList={[
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
      />
    )
    expect(wrapper.find('.Grocery').length).toEqual(3)
  });

  it('should have a clear button that is disabled is there are no groceries in the grocery list', () => {
    const wrapper = shallow(
      <GroceryList
        groceryList={[]}
      />
    )
    expect(wrapper.find('.Grocery-clear').prop('disabled')).toBe(false)
  });

  it('should call the onClear prop when clicked', () => {
    const onClearMock = jest.fn();

    const wrapper = mount(
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
        onClear={onClearMock}
      />
    );

    wrapper.find('.Grocery-clear').simulate('click');
    expect(onClearMock).toBeCalled();
  });
});
