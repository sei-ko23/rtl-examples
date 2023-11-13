import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";

const user = userEvent.setup();

describe("Register component testing", () => {
  beforeEach(() => {
    render(<Register />);
  });
  test("should render register component correctly", () => {
    const header = screen.getByRole("heading", { level: 2 });
    expect(header).toBeInTheDocument();
  });
  test("should not show error message when the component is loaded", () => {
    act(() => {
      const errorAlert = screen.queryByRole("alert");
      expect(errorAlert).not.toBeInTheDocument();
    });
  });
  test("should checkbox be unchecked when the component is loaded", () => {
    const checkboxInput = screen.getByRole("checkbox");
    expect(checkboxInput.checked).toEqual(false);
  });
  test("should show error message when all fields are not entered", async () => {
    const submitButton = screen.getByRole("button", { name: /register/i });
    await user.click(submitButton);
    act(() => {
      const errorAlert = screen.getByRole("alert");
      expect(errorAlert).toBeInTheDocument();
    });
  });
  test("should checkbox be checked when registration is successfum", async () => {
    const checkboxInput = screen.getByRole("checkbox");
    await user.click(checkboxInput);
    act(() => {
      expect(checkboxInput.checked).toEqual(true);
    });
  });
  test("should show success message when registration is successful", async () => {
    const submitButton = screen.getByRole("button", { name: /register/i });
    await user.click(submitButton);
    act(() => {
      const successAlert = screen.getByRole("alert");
      expect(successAlert).toBeInTheDocument();
    });
  });
});
