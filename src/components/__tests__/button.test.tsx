import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";

describe("Component button", () => {

  it("renders correctly", () => {
    const component = renderer.create(<Button />).toJSON();
    expect(component).toMatchSnapshot();
  })

  it("should have classes: 'py-2', 'px-6', 'rounded-3xl', 'bg-blue-500', 'text-white' ", () => {
    const DEFAULT_CLASSES = [
      'py-2',
      'px-6',
      'rounded-3xl',
      'bg-blue-500',
      'text-white'
    ]

    const component = renderer.create(<Button />).root
    const componentTest = component.findByType('button')

    DEFAULT_CLASSES.forEach(className => {
      expect(componentTest.props['className']).toContain(className)
    });
  })

  it("should render element type equal to <button />", () => {
    const component = renderer.create(<Button />).root
    const componentTest = component.findByType('button')

    expect(componentTest.type).toEqual("button")
  })

  it("should render with children", () => {
    const CHILDREN = 'Hello world!'

    const component = renderer.create(<Button>{CHILDREN}</Button>).root
    const componentTest = component.findByType('button')

    expect(componentTest.children).toEqual([CHILDREN])
  })

  it("should do action when click", () => {
    const RETURN_CLICKED = "CLICKED!"
    const component = renderer.create(<Button onClick={(() => RETURN_CLICKED )} />).root
    const componentTest = component.findByType('button')

    expect(componentTest.props.onClick()).toEqual(RETURN_CLICKED)
  })

  it("should extend current class", () => {
    const CLASS_NAME = "bg-blue-300"
    const component = renderer.create(<Button className={CLASS_NAME} />).root;
    const componentTest = component.findByType("button")
  
    expect(componentTest.props["className"]).toContain(CLASS_NAME)
  })
})