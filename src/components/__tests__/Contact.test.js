import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Accertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Accertion
    expect(button).toBeInTheDocument();
  });

  test("Should load button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    // Accertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    // Accertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes in the Contact Component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);  => return jsx => react-element => object
    // console.log(inputBoxes.length);

    // Accertion
    expect(inputBoxes.length).toBe(2);
  });
  
});
