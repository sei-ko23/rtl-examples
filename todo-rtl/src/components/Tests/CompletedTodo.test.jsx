import { render, screen } from "@testing-library/react";
import CompletedTodo from "../CompletedTodo/CompletedTodo";

/* MOCK DATA */
const mockTodoWithSomeCompleted = [
  { completed: true },
  { completed: false },
  { completed: true },
];

const mockTodoWithAllCompleted = [{ completed: true }, { completed: true }];

describe("Completed todo testing", () => {
  test("Display message when task incomple", () => {
    render(
      <CompletedTodo
        todos={[{ id: "1234", title: "go home", completed: false }]}
      />
    );
    const incomplete = screen.getByText(/no task completed yet/i);
    expect(incomplete).toBeInTheDocument();
  });
  test("Display message when some tasks are completed", () => {
    render(<CompletedTodo todos={mockTodoWithSomeCompleted} />);
    const some = screen.getByText(/some tasks completed/i);
    expect(some).toBeInTheDocument();
  });
  test("Display message when all tasks are completed", () => {
    render(<CompletedTodo todos={mockTodoWithAllCompleted} />);
    const all = screen.getByText(/completed all your tasks/i);
    expect(all).toBeInTheDocument();
  });
});
