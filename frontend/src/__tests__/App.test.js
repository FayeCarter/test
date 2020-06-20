import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Dashboard from '../components/Dashboard';
import Join from '../components/Join';
import App from '../App';

describe("Application routing Testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = mount(<App />);
  });

  test("Renders join route", () => {
    expect(wrapper.html()).toContain('Join')
  });

})
