import { React, useState, useEffect } from "react";
import CategoryItem from "./CategoryItem";
import { FiPlus, FiTag } from "react-icons/fi";

const CategoryPanel = ({
  setSelectedPanel,
  setSelectedCategory,
  categories,
  setCategories,
}) => {
  // Save categories to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  // Add new category
  function addCategory() {
    const newCategoryName = document.getElementById("categoryInput").value;

    // Check if input is empty
    if (newCategoryName === "") {
      alert("Please enter a category name!");
      return;
    }

    // Check if category already exists
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].categoryName === newCategoryName) {
        alert("Category already exists!");
        return;
      }
    }

    // Add new category
    const newCategory = {
      id: categories.length + 1,
      categoryName: newCategoryName,
      todos: [],
    };
    setCategories([...categories, newCategory]);

    // Clear input
    document.getElementById("categoryInput").value = "";
  }

  // Delete category
  const deleteCategory = (categoryName) => {
    setCategories(
      categories.filter((category) => category.categoryName !== categoryName),
    );
  };

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full flex-1 flex-col overflow-y-auto rounded-lg scrollbar-thin scrollbar-track-background scrollbar-thumb-primary">
        {categories.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center text-text">
            No lists have been created yet...
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                setSelectedCategory={setSelectedCategory}
                setSelectedPanel={setSelectedPanel}
                categoryObject={category}
                deleteCategoryFunction={deleteCategory}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex w-full flex-row gap-3 rounded-lg bg-background px-6 py-3">
        <input
          id="categoryInput"
          className="flex-1 bg-transparent text-text outline-none"
          placeholder="Add a new list..."
        />
        <FiPlus
          onClick={addCategory}
          className="cursor-pointer text-primary hover:text-white"
          size={24}
        />
      </div>
    </div>
  );
};

export default CategoryPanel;
