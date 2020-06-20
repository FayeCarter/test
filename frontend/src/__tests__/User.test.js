import React from "react";
import { shallow } from "enzyme";
import User from "../components/User.js";

describe("Application Testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<User />);
  });

  test("User calls spotify api to get details", () => {

  });

})
