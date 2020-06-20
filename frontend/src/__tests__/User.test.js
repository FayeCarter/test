import React from "react";
import { shallow } from "enzyme";
import User from "../components/User.js";


const fetch = jest.fn(() => Promise.resolve());

describe("Application Testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<User authToken={process.env.TOKEN} />);
  });

  test("Username element exists",  () => {
    expect(wrapper.find(".username").exists()).toEqual(true);
  });

  test('user data from spotify', () => {
    // const getSpy = jest.spyOn(fetch, 'get');
    // const user = shallow(
    //   <User/>
    // );
    // expect(getSpy).toBeCalled();
  });

})
