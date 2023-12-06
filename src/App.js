import { FiSearch } from "react-icons/fi";
import { useState } from "react";

import CategoriesPanel from "./components/CategoryPanel.jsx";
import TodoPanel from "./components/TodoPanel.jsx";

// Main App component
function App() {

  // Determine content panel
  const [selectedPanel, setSelectedPanel] = useState("categories");
  let contentPanel;
  if (selectedPanel === "categories") {
    contentPanel = <CategoriesPanel />
  } else {
    contentPanel = <TodoPanel />
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-background">
      <div className="w-[700px] h-full p-20 flex flex-col gap-4">

        <div className="w-full rounded-lg px-5 py-4 flex flex-row items-center gap-3 bg-secbackground">
          <FiSearch size={20} className="text-text" />
          <input
            className="flex-1 bg-transparent outline-none text-text"
            placeholder="Search for item..."
          />
        </div>

        <div className="flex-1 rounded-lg p-5 bg-secbackground">
          {contentPanel}
        </div>
      </div>
    </div>
  );
}

export default App;
