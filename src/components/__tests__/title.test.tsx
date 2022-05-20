import React from "react";
import renderer from "react-test-renderer";
import Title from "../Title";

it("renders correctly", () => {
  const component = renderer.create(<Title />).toJSON();
  expect(component).toMatchSnapshot();
});

it("should render element type equal to h1", () => {
  const component = renderer.create(<Title />).root;
  const componentTest = component.findByType("h1");

  expect(componentTest.type).toEqual("h1");
});

it("should extend current className", () => {
  const CLASS_NAME = "text-center";
  const component = renderer.create(<Title className={CLASS_NAME} />).root;
  const componentTest = component.findByType("h1");

  expect(componentTest.props["className"]).toContain(CLASS_NAME);
});

it("should render with children", () => {
  const CHILDREN = "Hello world!";

  const component = renderer.create(<Title>{CHILDREN}</Title>).root;
  const componentTest = component.findByType("h1").children;

  expect(componentTest).toEqual([CHILDREN]);
});
