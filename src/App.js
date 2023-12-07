import { FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";

import CategoriesPanel from "./components/CategoryPanel.jsx";
import TodoPanel from "./components/TodoPanel.jsx";
import { FiFeather, FiGithub } from "react-icons/fi";

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
            placeholder="Search for item..."
          />
        </div>
        <div className="flex-1 overflow-auto  rounded-lg bg-secbackground px-6 py-4 scrollbar-thumb-black">
          {selectedPanel === "categories" ? (
            <CategoriesPanel
              setSelectedPanel={setSelectedPanel}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
              setCategories={setCategories}
            />
          ) : (
            <TodoPanel
              setSelectedPanel={setSelectedPanel}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          )}
        </div>
      </div>
    </div>
    // <div className="flex h-screen w-screen flex-col items-center bg-background">
    //   <div class=" flex h-full w-[700px] flex-col gap-4 p-20">
    //     {/*  */}
    //     {/* <div className="flex w-full flex-1 overflow-auto rounded-md bg-red-500 p-1">
    //       <div className="h-full w-full overflow-auto bg-blue-500">
    //         <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p> <p>text</p>
    //         <p>text</p>
    //       </div>
    //     </div> */}
    //     {/*  */}
    //     <div className="flex flex-row items-center justify-center gap-2 p-4 text-primary">
    //       <FiFeather size={36} />
    //       <span className="text-4xl font-bold">Achievo</span>
    //     </div>
    //     <div className="flex w-full flex-row items-center gap-3 rounded-lg bg-secbackground px-5 py-4">
    //       <FiSearch size={20} className="text-text" />
    //       <input
    //         className="flex-1 bg-transparent text-text outline-none"
    //         placeholder="Search for item..."
    //       />
    //     </div>
    //     <div className="flex-1 rounded-lg bg-secbackground p-5">
    //       {contentPanel}
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
