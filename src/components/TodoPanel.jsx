import React from "react";
import { FiArrowLeft, FiCheckSquare, FiSquare, FiPlus } from "react-icons/fi";

const TodoPanel = ({
  setSelectedPanel,
  selectedCategory,
  setSelectedCategory,
}) => {
  //change todo status
  function changeTodoStatus(id) {
    const todo = selectedCategory.todos.find((todo) => todo.id === id);
    todo.isComplete = !todo.isComplete;
    setSelectedCategory({
      ...selectedCategory,
      todos: [...selectedCategory.todos],
    });
  }

  //add todo to selected category
  function addTodo() {
    const newTodoText = document.getElementById("todoInput").value;

    // Check if input is empty
    if (newTodoText === "") {
      alert("Please enter a todo!");
      return;
    }

    // Check if todo already exists
    for (let i = 0; i < selectedCategory.todos.length; i++) {
      if (selectedCategory.todos[i].text === newTodoText) {
        alert("Todo already exists!");
        return;
      }
    }

    // Add new todo
    const newTodo = {
      id: selectedCategory.todos.length + 1,
      isComplete: false,
      text: newTodoText,
    };

    // Create a new array with the updated todos
    const updatedTodos = [...selectedCategory.todos, newTodo];

    // Set the state with the new array
    setSelectedCategory({
      ...selectedCategory,
      todos: updatedTodos,
    });

    // Clear input
    document.getElementById("todoInput").value = "";
  }

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex flex-row items-center justify-center gap-3 rounded-lg border border-primary px-3 py-2">
        <FiArrowLeft
          onClick={() => setSelectedPanel("categories")}
          className="text-primary"
          size={24}
        />
        <div className="flex flex-1 items-center justify-center text-primary">
          {selectedCategory.categoryName}
        </div>
        <FiArrowLeft className="text-transparent" size={24} />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {selectedCategory.todos.length === 0 ? (
          <div className="flex flex-1 flex-row items-center justify-center gap-2 text-text">
            There are no todos in this folder yet...
          </div>
        ) : (
          <>
            {selectedCategory.todos.map((todo) => (
              <div className="flex flex-row gap-2">
                <div>
                  {todo.isComplete ? (
                    <div className="mb-4 flex items-center"></div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <input
                        id={todo.id}
                        type="checkbox"
                        value=""
                        class=""
                        onChange={changeTodoStatus(todo.id)}
                      />
                      <label for={todo.id}>{todo.text}</label>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex w-full flex-row gap-3 rounded-lg bg-background px-6 py-3">
        <input
          id="todoInput"
          className="flex-1 bg-transparent text-text outline-none"
          placeholder="Add a new todo..."
        />
        <FiPlus onClick={addTodo} className="text-primary" size={24} />
      </div>
    </div>
  );
};

export default TodoPanel;
