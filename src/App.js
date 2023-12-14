import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

import CategoriesPanel from "./components/CategoryPanel.jsx";
import TodoPanel from "./components/TodoPanel.jsx";
import { FiLink2, FiX, FiGithub } from "react-icons/fi";

// Main App component
function App() {
  // Determine content panel
  const [selectedPanel, setSelectedPanel] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Load categories from local storage or use default data
  const initialCategories = JSON.parse(localStorage.getItem("categories")) || [
    {
      id: 1,
      categoryName: "Home-work",
      todos: [
        { id: 1, isComplete: false, text: "Mathematics" },
        { id: 2, isComplete: true, text: "English reading" },
      ],
    },
  ];

  // Set categories state
  const [categories, setCategories] = useState(initialCategories);

  // if selected category's todo's are updated, update categories state
  useEffect(() => {
    if (selectedCategory) {
      const newCategories = categories.map((category) => {
        if (category.id === selectedCategory.id) {
          return selectedCategory;
        } else {
          return category;
        }
      });
      setCategories(newCategories);
    }
  }, [selectedCategory]);

  // Function to handle search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategoriesResults, setsearchCategoriesResults] = useState([]);
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setSelectedPanel("searching");
    } else {
      setSelectedPanel("categories");
    }
    setSearchTerm(value);

    // Search for categories with matching name
    const results = categories.filter((category) =>
      category.categoryName.toLowerCase().includes(value.toLowerCase()),
    );
    setsearchCategoriesResults(results);
  };
  return (
    <div className="flex h-screen w-screen justify-center bg-background">
      <div className="flex h-full w-[550px] flex-col gap-5  py-28">
        <div className="flex w-full flex-row items-center justify-center gap-2">
          <FiGithub className="text-primary" size={30} />
          <div className="text-4xl font-bold italic text-primary">Achievo</div>
        </div>
        <div className="flex flex-row items-center gap-3 rounded-lg bg-secbackground px-8 py-4">
          <FiSearch size={24} className="text-primary" />
          <input
            className="flex-1 bg-transparent text-text outline-none"
            placeholder="Search for lists..."
            onChange={handleSearch}
            value={searchTerm}
          />
          {searchTerm !== "" && (
            <FiX
              size={24}
              className="cursor-pointer text-primary"
              onClick={() => {
                setSearchTerm("");
                setSelectedPanel("categories");
              }}
            />
          )}
        </div>

        <div className="flex-1 overflow-auto rounded-lg bg-secbackground px-6 py-4 scrollbar-thumb-black">
          {selectedPanel === "categories" ? (
            <CategoriesPanel
              setSelectedPanel={setSelectedPanel}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
              setCategories={setCategories}
            />
          ) : selectedPanel === "todos" ? (
            <TodoPanel
              setSelectedPanel={setSelectedPanel}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              setCategories={setCategories}
              categories={categories}
            />
          ) : (
            <div className="flex h-full w-full">
              {searchCategoriesResults.length > 0 ? (
                <div className="flex flex-1 flex-col">
                  <label className="my-2 flex w-full items-center justify-center px-4 py-1 text-text">
                    Search results ({searchCategoriesResults.length}) :
                  </label>
                  <div>
                    {searchCategoriesResults.map((category) => (
                      <div
                        key={category.id}
                        className="group my-2 flex flex-1 cursor-pointer flex-row items-center rounded-lg px-4 py-2 hover:bg-primary"
                        onClick={() => {
                          setSelectedPanel("todos");
                          setSelectedCategory(category);
                        }}
                      >
                        <div className="flex-1 text-text group-hover:text-white">
                          {category.categoryName}
                        </div>
                        <FiLink2
                          size={20}
                          className="cursor-pointer text-primary group-hover:text-white"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-1  flex-col items-center justify-center gap-4">
                  <div className=" text-text">No results found.</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
