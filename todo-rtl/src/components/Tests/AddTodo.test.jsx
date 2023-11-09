import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTodo from "../AddTodo/AddTodo";

/* USER EVENT DEFINITION */
const user = userEvent.setup();
/* MOCK FUNCTION DEFINITION */
const mockFnt = jest.fn();
/* MOCK ID VALUE */
jest.mock("uuidv4", () => ({ uuid: () => "1234" }));

describe("Add To Do testing", () => {
  /* AVOID COMPONENT FIRST RENDER DUPLICATION */
  beforeEach(() => {
    render(<AddTodo add={mockFnt} />);
  });
  /* CLEAR MOCK FUNCTION AFTER EACH USE */
  afterEach(() => {
    mockFnt.mockClear();
  });

  test("renders correctly", () => {
    const todoHeading = screen.getByRole("heading", { name: /add a to do/i });
    expect(todoHeading).toBeInTheDocument();
    const todoInput = screen.getByPlaceholderText(/add a new to do/i);
    expect(todoInput).toBeInTheDocument();
    const addButton = screen.getByRole("button", { name: /add/i });
    expect(addButton).toBeInTheDocument();
  });

  test("expect input to be empty and button not clicked", async () => {
    const todoInput = screen.getByPlaceholderText(/add a new to do/i);
    expect(todoInput.value).toBe("");
    const addButton = screen.getByRole("button", { name: /add/i });
    await user.click(addButton);
    expect(mockFnt).not.toHaveBeenCalled();
  });

  test("expect input to be inputted with specific values when typing and button to be clicked and then input to be emptied", async () => {
    const todoInput = screen.getByPlaceholderText(/add a new to do/i);
    await user.type(todoInput, "work out");
    expect(todoInput.value).toBe("work out");
    const addButton = screen.getByRole("button", { name: /add/i });
    await user.click(addButton);
    act(() => {
      expect(mockFnt).toHaveBeenCalledTimes(1);
    });
    act(() => {
      expect(mockFnt).toHaveBeenCalledWith({
        completed: false,
        id: "1234",
        title: "work out",
      });
    });
    act(() => {
      expect(todoInput).toHaveValue("");
    });
  });
});
