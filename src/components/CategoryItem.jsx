import { React, useState } from 'react';
import { FiTrash, FiEdit3, FiCheck, FiX } from "react-icons/fi";

const CategoryItem = ({ setSelectedPanel, setSelectedCategory, categoryObject, deleteCategoryFunction }) => {

    // Determin type of icons
    const [isEditingName, setIsEditingName] = useState(false);
    let icons;
    if (isEditingName) {
        icons =
            <>
                <FiCheck size={18} />
                <FiX size={18} />
            </>
    } else {
        icons =
            <>
                <FiEdit3 onClick={toggleEditingMode} size={18} />
                <FiTrash onClick={() => deleteCategoryFunction(categoryObject.categoryName)} size={18} />
            </>
    }

    // Set editing mode
    function toggleEditingMode() {
        setIsEditingName(!isEditingName);
    }

    return (
        <div className='w-full flex gap-3 justify-between items-center flex-row px-4 py-2 hover:font-semibold rounded-lg text-text hover:text-secbackground hover:bg-primary'>
            <div
                onClick={() => { setSelectedPanel("todos"); setSelectedCategory(categoryObject); }}
                className='w-1/2 cursor-pointer h-full flex-wrap items-center'>
                {categoryObject.categoryName}
            </div>
            <div className='flex flex-row gap-3'>
                {icons}
            </div>
        </div>
    );
};

export default CategoryItem;
