import React from "react";
import NavBar from "../components/NavBar";
import User from "../components/User";
import Search from "../components/Search";

import { shallow } from 'enzyme';

describe("NavBar page testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<NavBar />)
  })

  test("renders with User", () => {
    expect(wrapper.containsMatchingElement(<User />)).toEqual(true);
  });

  test("renders with Search Bar", () => {
    expect(wrapper.containsMatchingElement(<Search />)).toEqual(true);
  });
})