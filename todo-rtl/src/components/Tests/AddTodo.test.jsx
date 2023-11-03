import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTodo from "../AddTodo/AddTodo";

describe("Add To Do testing", () => {
  test("renders correctly", () => {
    render(<AddTodo />);
    const todoHeading = screen.getByRole("heading", { name: /add a to do/i });
    expect(todoHeading).toBeInTheDocument();
    const todoInput = screen.getByPlaceholderText(/add a new to do/i);
    expect(todoInput).toBeInTheDocument();
    const addButton = screen.getByRole("button", { name: /add/i });
    expect(addButton).toBeInTheDocument();
  });

  test("expect input to be empty and button not clicked", async () => {
    const user = userEvent.setup();
    render(<AddTodo />);
    const mockFnt = jest.fn();
    const todoInput = screen.getByPlaceholderText(/add a new to do/i);
    expect(todoInput.value).toBe("");
    const addButton = screen.getByRole("button", { name: /add/i });
    await user.click(addButton);
    expect(mockFnt).not.toHaveBeenCalled();
  });

  test("expect input to be inputted when typing and button to be clicked", async () => {
    const user = userEvent.setup();
    const mockFnt = jest.fn();
    render(<AddTodo add={mockFnt} />);
    const todoInput = screen.getByPlaceholderText(/add a new to do/i);
    await user.type(todoInput, "go buy milk");
    expect(todoInput.value).toBe("go buy milk");
    const addButton = screen.getByRole("button", { name: /add/i });
    await user.click(addButton);
    act(() => {
      expect(mockFnt).toHaveBeenCalledTimes(1);
    });
  });

  // test("clicking on add button", async () => {
  //   const user = userEvent.setup();
  //   const mockFnt = jest.fn(() => console.info("button clicked"));
  //   render(<AddTodo />);

  // });
});
