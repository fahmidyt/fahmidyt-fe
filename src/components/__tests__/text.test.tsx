import React from "react";
import renderer from "react-test-renderer";
import Text from "../Text";

it("renders correctly", () => {
  const component = renderer.create(<Text />).toJSON();
  expect(component).toMatchSnapshot();
});

it("should render element type equal to p", () => {
  const component = renderer.create(<Text />).root;
  const componentTest = component.findByType('p')

  expect(componentTest.type).toEqual('p')
})

it("should extend current className", () => {
  const CLASS_NAME = "text-center"
  const component = renderer.create(<Text className={CLASS_NAME} />).root;
  const componentTest = component.findByType("p")

  expect(componentTest.props["className"]).toContain(CLASS_NAME)
})

it("should render with children", () => {
  const CHILDREN = 'Hello world!'

  const component = renderer.create(<Text>{CHILDREN}</Text>).root
  const componentTest = component.findByType("p").children

  expect(componentTest).toEqual([CHILDREN])
})
