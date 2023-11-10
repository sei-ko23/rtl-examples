import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "../TodoItem/TodoItem";

/* USER EVENT DEFINITION */
const user = userEvent.setup();
/* MOCK FUNCTIONS DEFINITION */
const markCompleted = jest.fn();
const deleteTodo = jest.fn();
/* MOCK DATA */
const mockTodo = {
  completed: false,
  id: "1234",
  title: "work out",
};

describe("Todo Item testing", () => {
  test("render todo item with null prop", () => {
    render(<TodoItem todo={null} />);
  });
  test("render todo item correctly with mock information", () => {
    render(<TodoItem todo={mockTodo} />);
  });
  test("Todo is marked completed when checkbox clicked", async () => {
    render(<TodoItem todo={mockTodo} markCompleted={markCompleted} />);
    const checkbox = screen.getByLabelText(mockTodo.title);
    await user.click(checkbox);
    expect(markCompleted).toHaveBeenCalledTimes(1);
    expect(markCompleted).toHaveBeenCalledWith(mockTodo.id);
  });
  test("Todo is deleted when delete button clicked", async () => {
    render(<TodoItem todo={mockTodo} deleteTodo={deleteTodo} />);
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await user.click(deleteButton);
    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledWith(mockTodo.id);
  });
});
