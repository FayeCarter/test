import React from "react";
import { shallow } from "enzyme";
import Join from "../components/Join.js";

describe("Join page Testing", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Join />);
  });

  test("renders header with `Spotify App` text", () => {
    expect(wrapper.find('h1').text()).toContain("Spotify App")
  });

  test("renders `Enter with Spotify` button", () => {
    expect(wrapper.find('#enter-button').text()).toBe("Enter with Spotify")
  });

  test("`enter-button` redirects to server route", () => {
    jest.spyOn(window.location, "assign").mockImplementation()
    wrapper.find("#enter-button").simulate("click");
    expect(window.location.assign).toHaveBeenCalledWith("http://localhost:5000/api/login");
  });
})
