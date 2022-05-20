import React from "react";
import renderer from "react-test-renderer";
import Container from "../Container";

it("renders correctly", () => {
  const component = renderer.create(<Container />).toJSON();
  expect(component).toMatchSnapshot();
});

it("should render element type equal to main", () => {
  const component = renderer.create(<Container />).root;
  const componentTest = component.findByType('main')

  expect(componentTest.type).toEqual('main')
})

it("should render with class w-full", () => {
  const component = renderer.create(<Container full />).root;

  expect(component.props['full']).toEqual(true)
  expect(component.findByType("main").props["className"]).toContain("w-full");
});

it("should render with breakpoint: 540px, 720px, 960px, 1140px", () => {
  const component = renderer.create(<Container />).root;
  const componentTest = component.findByType("main").props["className"]

  const brClasses = [
    "sm:w-[540px]",
    "md:w-[720px]",
    "lg:w-[960px]",
    "xl:w-[1140px]",
  ]

  brClasses.forEach(classes => {
    expect(componentTest).toContain(classes)
  });
});

it("should render with children", () => {
  const CHILDREN = 'Hello world!'

  const component = renderer.create(<Container>{CHILDREN}</Container>).root
  const componentTest = component.findByType("main").children

  expect(componentTest).toEqual([CHILDREN])
})

it("should extend current class", () => {
  const CLASS_NAME = "text-center"
  const component = renderer.create(<Container className={CLASS_NAME} />).root;
  const componentTest = component.findByType("main")

  expect(componentTest.props["className"]).toContain(CLASS_NAME)
})

