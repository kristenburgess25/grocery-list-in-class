
import React from 'react';
import { shallow, mount } from 'enzyme';
import Grocery from './Grocery';


describe('Grocery', () => {
  it('renders the name of the grocery in <h3> tags', () => {
    const wrapper = shallow(
      <Grocery name = "Bananas" />
    );
    const title = <h3>Bananas</h3>;

    expect(wrapper.contains(title)).toEqual(true);
  });

  it('has a class of .Grocery', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" />
    );

    expect(wrapper.is('.Grocery')).toEqual(true);
  });

  it('should have a className of "starred" if is starred', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" starred={true} />
    );

    expect(wrapper.is('.starred')).toEqual(true);
  });

  it('should not have a className of "starred" if it is not starred', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" starred={false} />
    );

    expect(wrapper.is('.starred')).toEqual(false);
  });

  it('should have a className of "purchased" if it is purchased', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" purchased={true} />
    );

    expect(wrapper.is('.purchased')).toEqual(true);
  });

  it('should not have a className of "purchased" if it is not purchased', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" purchased={undefined} />
    );

    expect(wrapper.is('.purchased')).toEqual(false);
  });

  it('should have a p.Grocery-quantity element if a quanity is passed as a prop', () => {
  const wrapper = shallow (
      <Grocery name="Bananas" quantity={'17 bunches'} />
    );

    expect(wrapper.find('.Grocery-quantity').length).toEqual(1);
  });

  it('should not have a p.Grocery-quantity element if a quantity is not passed as a prop', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" quantity={''} />
    );

    expect(wrapper.find('.Grocery-quantity').length).toEqual(0);
  });

  it('should have a p.Grocery-notes element if notes are passed as a prop', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" notes={'Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotoin, known to promote relaxation and improve modde'} />
    );

    expect(wrapper.find('.Grocery-notes').length).toEqual(1);
  });

  it('should not have a p.Grocery-notes element if notes are not passed as a prop', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" notes={''} />
    );

    expect(wrapper.find('.Grocery-notes').length).toEqual(0);
  });
});

describe('.Grocery-purchase button', () => {
  it('should have a text of "Purchase" if purchased is false', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" purchased={undefined} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Purchase');
  });

  it('should have a text of "Unpurchase" if purchased is true', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" purchased={true} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Unpurchase');
  });
});

describe('.Grocery-star button', () => {
  it('should have a text of "Star" if starred is false', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" starred={undefined} />
    );

    expect(wrapper.find('.Grocery-star').text()).toEqual('Star');
  });

  it('should have a text of "Unstar" if starred is true', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" starred={true} />
    );

    expect(wrapper.find('.Grocery-star').text()).toEqual('Unstar');
  });
});

describe('.Grocery-delete button', () => {
  it('should have a delete button', () => {
    const wrapper = shallow (
      <Grocery name="Bananas"/>
    );

    expect(wrapper.find('.Grocery-delete').text()).toEqual('Delete');
  });
});

describe('.Grocery-quantity field', () => {
  it('should have the correct quantity in the quantity field', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" quantity={'17 bunches'}/>
    );

    expect(wrapper.find('.Grocery-quantity').text()).toEqual('Quantity: 17 bunches');
  });
});

describe('.Grocery-notes field', () => {
  it('should have the correct note in the notes field', () => {
    const wrapper = shallow (
      <Grocery name="Bananas" notes={'Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotoin, known to promote relaxation and improve modde'}/>
    );

    expect(wrapper.find('.Grocery-notes').text()).toEqual('Notes: Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotoin, known to promote relaxation and improve modde');
  });
});

it('should call the onPurchase prop when clicked', () => {
  const onPurchaseMock = jest.fn();

  const wrapper = mount(
    <Grocery
      name="Bananas"
      purchased={true}
      onPurchase={onPurchaseMock}
    />
  );

  wrapper.find('.Grocery-purchase').simulate('click');

  expect(onPurchaseMock).toBeCalled();
});

it('should call the onStar prop when clicked', () => {
  const onStarMock = jest.fn();

  const wrapper = mount(
    <Grocery
      name="Bananas"
      starred={true}
      onStar={onStarMock}
    />
  );

  wrapper.find('.Grocery-star').simulate('click');

  expect(onStarMock).toBeCalled();
});

it('should call the onDelete prop when clicked', () => {
  const onDeleteMock = jest.fn();

  const wrapper = mount(
    <Grocery
      name="Bananas"
      purchased={true}
      onDelete={onDeleteMock}
    />
  );

  wrapper.find('.Grocery-delete').simulate('click');

  expect(onDeleteMock).toBeCalled();
});
