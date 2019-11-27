import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './Accordian';
import renderer from 'react-test-renderer';


//Snapshot1
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(Accordian />, div);
  ReactDOM.unmountComponentAtNode(div);

//Snapshot2
it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Accordian name="Accordian" {}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});

//Snapshot3
it('renders the UI as expected with no unreads', () => {
  const tree = renderer
    .create(<Accordian name="Accordian" {}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
