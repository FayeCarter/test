import React from "react";
import { shallow } from "enzyme";
import User from "../components/User.js";


describe("Application Testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<User authToken={process.env.TOKEN} />);
  });

  test("User Avatar element exists",  () => {
    expect(wrapper.find(".avatar").exists()).toEqual(true);
  });

  test('user data from spotify', () => {
    // const getSpy = jest.spyOn(fetch, 'get');
    // const user = shallow(
    //   <User/>
    // );
    // expect(getSpy).toBeCalled();
  });

})
