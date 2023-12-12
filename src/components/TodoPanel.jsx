import React from "react";
import { FiArrowLeft, FiPlus, FiTrash } from "react-icons/fi";

const TodoPanel = ({
  setSelectedPanel,
  selectedCategory,
  setSelectedCategory,
  setCategories,
  categories,
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

  // delete todo from selected category
  function deleteTodo(id) {
    const todo = selectedCategory.todos.find((todo) => todo.id === id);
    setSelectedCategory({
      ...selectedCategory,
      todos: selectedCategory.todos.filter((todo) => todo.id !== id),
    });

    // Update categories state
    setCategories(
      categories.map((category) => {
        if (category.categoryName === selectedCategory.categoryName) {
          return selectedCategory;
        } else {
          return category;
        }
      }),
    );
  }

  // add todo to selected category
  function addTodo() {
    const newTodoText = document.getElementById("todoInput").value;

    // Check if input is empty
    if (newTodoText === "") {
      alert("Please enter a todo!");
      return;
    }

    console.log(selectedCategory);

    // Check if todo already exists
    for (let i = 0; i < selectedCategory.todos.length; i++) {
      if (newTodoText === selectedCategory.todos[i].text) {
        alert("Todo already exists!");
        return;
      }
    }

    // Create new todo
    const newTodo = {
      id: selectedCategory.todos.length + 1,
      text: newTodoText,
      isComplete: false,
    };

    // Add new todo to selected category
    setSelectedCategory({
      ...selectedCategory,
      todos: [...selectedCategory.todos, newTodo],
    });

    // Update categories state
    setCategories(
      categories.map((category) => {
        if (category.categoryName === selectedCategory.categoryName) {
          return selectedCategory;
        } else {
          return category;
        }
      }),
    );

    // Clear input
    document.getElementById("todoInput").value = "";
  }

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex flex-row items-center justify-center gap-3 rounded-lg border border-primary px-3 py-2">
        <FiArrowLeft
          onClick={() => setSelectedPanel("categories")}
          className="cursor-pointer text-primary hover:text-white"
          size={24}
        />
        <div className="flex flex-1 items-center justify-center text-primary">
          {selectedCategory.categoryName}
        </div>
        <FiArrowLeft className="text-transparent" size={24} />
      </div>
      <div className="flex flex-1 flex-col gap-1 overflow-auto">
        {selectedCategory.todos.length === 0 ? (
          <div className="flex flex-1 flex-row items-center justify-center gap-2 text-text">
            There are no todos in this list yet...
          </div>
        ) : (
          <div className="flex flex-1 flex-col overflow-auto">
            {selectedCategory.todos.map((todo) => (
              <div className="flex w-full flex-row gap-2 px-6 py-1.5">
                <label
                  htmlFor={todo.id}
                  className="flex flex-1 cursor-pointer flex-row items-center gap-3 "
                >
                  <input
                    id={todo.id}
                    type="checkbox"
                    checked={todo.isComplete}
                    className="h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-md border-2
                    border-primary bg-transparent checked:border-0 checked:bg-primary"
                    onChange={() => changeTodoStatus(todo.id)}
                  />
                  <span
                    className={`flex-1 ${
                      todo.isComplete
                        ? "text-primary line-through"
                        : "text-text"
                    }`}
                  >
                    {todo.text}
                  </span>
                </label>
                <div className="flex flex-row gap-2">
                  <FiTrash
                    className={`${
                      todo.isComplete
                        ? "text-primary line-through"
                        : "text-text"
                    } cursor-pointer hover:text-white`}
                    size={20}
                    onClick={() => deleteTodo(todo.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex w-full flex-row gap-3 rounded-lg bg-background px-6 py-3">
        <input
          id="todoInput"
          className="flex-1 bg-transparent text-text outline-none"
          placeholder="Add a new todo..."
        />
        <FiPlus
          onClick={addTodo}
          className="cursor-pointer text-primary hover:text-white"
          size={24}
        />
      </div>
    </div>
  );
};

export default TodoPanel;
