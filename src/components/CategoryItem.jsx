import { React, useState } from "react";
import { FiTrash, FiEdit3, FiCheck, FiX, FiFolder } from "react-icons/fi";

const CategoryItem = ({
  setSelectedPanel,
  setSelectedCategory,
  categoryObject,
  deleteCategoryFunction,
}) => {
  return (
    <div className="group flex w-full cursor-pointer flex-row items-center rounded-lg px-3 py-2 hover:bg-primary">
      <div
        onClick={() => {
          setSelectedPanel("todos");
          setSelectedCategory(categoryObject);
        }}
        className="flex flex-1 flex-row items-center justify-center gap-4"
      >
        <FiFolder size={20} className="text-primary group-hover:text-white" />
        <div className="flex-1 text-text group-hover:text-white">
          {categoryObject.categoryName}
        </div>
      </div>
      <div className="flex flex-row gap-3 group-hover:text-white">
        <FiTrash
          onClick={() => deleteCategoryFunction(categoryObject.categoryName)}
          size={20}
          className="cursor-pointer text-text group-hover:text-white"
        />
      </div>
    </div>
  );
};

export default CategoryItem;
