import React from 'react';
import CategoryItem from './CategoryItem';
import { FiPlus } from "react-icons/fi";

const CategoryPanel = () => {
    return (

        <div className='flex flex-1 flex-col h-full w-full'>
            <div className='flex-1'>
                <h1 className='text-lg font-semibold text-text px-4'>Select a category</h1>
                <hr className='mx-2 my-4 border-sectext' />
                <ul className='flex flex-col gap-1'>
                    <CategoryItem category={"hello"} />
                    <CategoryItem category={"awdawdawdawdawd"} />
                    <CategoryItem category={"lolol"} />
                    <CategoryItem category={"he123123123llo"} />
                </ul>
            </div>
            <div className='w-full p-3 flex flex-row gap-2 items-center justify-center'>
                <input
                    className="w-auto hover:bg-background focus:bg-background rounded-md px-3 py-2 bg-transparent outline-none text-text"
                    placeholder="Add new category..."
                />
                <button className=''>
                    <FiPlus className="text-primary" size={24} />
                </button>
            </div>

        </div>


    );
};

export default CategoryPanel;
