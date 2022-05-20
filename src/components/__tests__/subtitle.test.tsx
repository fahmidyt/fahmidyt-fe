import React from "react";
import renderer from "react-test-renderer";
import Subtitle from "../Subtitle";

it("renders correctly", () => {
  const component = renderer.create(<Subtitle />).toJSON();
  expect(component).toMatchSnapshot();
});

it("should render element type equal to p", () => {
  const component = renderer.create(<Subtitle />).root;
  const componentTest = component.findByType('p')

  expect(componentTest.type).toEqual('p')
})

it("should render with classes: text-lg", () => {
  const component = renderer.create(<Subtitle />).root;
  const componentTest = component.findByType("p")

  expect(componentTest.props["className"]).toContain("text-lg");
})

it("should extend current className", () => {
  const CLASS_NAME = "text-center"
  const component = renderer.create(<Subtitle className={CLASS_NAME} />).root;
  const componentTest = component.findByType("p")

  expect(componentTest.props["className"]).toContain(CLASS_NAME)
})

it("should render with children", () => {
  const CHILDREN = 'Hello world!'

  const component = renderer.create(<Subtitle>{CHILDREN}</Subtitle>).root
  const componentTest = component.findByType("p").children

  expect(componentTest).toEqual([CHILDREN])
})
