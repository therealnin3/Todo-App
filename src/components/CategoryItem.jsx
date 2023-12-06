import React from 'react';
import { FiTrash, FiEdit3 } from "react-icons/fi";

const CategoryItem = ({ category }) => {
    return (
        <div className='w-full flex items-center flex-row px-4 py-2 rounded-lg text-text hover:text-secbackground hover:bg-primary'>
            <span className='flex-1 cursor-pointer'>{category}</span>
            <div className='flex flex-row gap-3 items-center justify-center'>
                <FiEdit3 size={18} />
                <FiTrash size={18} />
            </div>
        </div>
    );
};

export default CategoryItem;
