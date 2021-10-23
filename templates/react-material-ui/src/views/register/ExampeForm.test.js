import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ExampleForm from "./ExampleForm";

describe("Example Form", () => {
  it("should generate snapshot", () => {
    const { container } = render(<ExampleForm />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should validate fields when in blank", async () => {
    render(<ExampleForm />);
    const submitBtn = screen.getByTestId("submit-button");
    fireEvent.click(submitBtn);

    waitFor(() => {
      expect(screen.getByTestId("firstName").toHaveClass("Mui-error"));
    });
  });

  it("should submit form", async () => {
    const { container } = render(<ExampleForm />);
    const submitBtn = screen.getByTestId("submit-button");
    const firstName = screen.getByTestId("firstName");
    const lastName = screen.getByTestId("lastName");

    fireEvent.input(firstName, { target: { value: "Henrique" } });
    fireEvent.input(lastName, { target: { value: "Henrique" } });
    fireEvent.click(submitBtn);

    waitFor(() => {
      expect(container.getElementsByClassName("Mui-error")).toHaveLength(0);
    });
  });
});
