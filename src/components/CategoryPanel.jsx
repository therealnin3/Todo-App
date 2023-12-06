import { React, useState, useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { FiPlus, FiTag } from "react-icons/fi";

const CategoryPanel = ({ setSelectedPanel, setSelectedCategory }) => {

    // Load categories from local storage or use default data
    const initialCategories = JSON.parse(localStorage.getItem('categories')) || [
        {
            id: 1,
            categoryName: "Home-work",
            todos: [
                { isComplete: false, text: "Mathematics" },
                { isComplete: true, text: "English reading" },
            ]
        }
    ];

    // Set categories state
    const [categories, setCategories] = useState(initialCategories);

    // Save categories to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories]);

    // Add new category
    function addCategory() {
        const newCategoryName = document.getElementById('categoryInput').value;

        // Check if input is empty
        if (newCategoryName === '') {
            return;
        }

        // Add new category
        const newCatergory = {
            id: categories.lenght + 1,
            categoryName: newCategoryName,
            todos: []
        }
        setCategories([...categories, newCatergory]);

        // Clear input
        document.getElementById('categoryInput').value = '';
    }

    // Delete category
    const deleteCategory = (categoryName) => {
        setCategories(categories.filter(category => category.categoryName !== categoryName));
    }

    return (
        <div className='flex flex-1 flex-col h-full w-full'>
            <div className='flex-1 w-full'>
                <span className='text-md items-center gap-3 justify-center flex w-full font-semibold text-text'>
                    <FiTag size={18} />
                    Select a category
                </span>
                <hr className='mx-2 my-4 border-sectext' />
                <div className='flex flex-col gap-2'>
                    {categories.map((category) => (
                        <CategoryItem key={category.id} setSelectedCategory={setSelectedCategory} setSelectedPanel={setSelectedPanel} categoryObject={category} deleteCategoryFunction={deleteCategory} />
                    ))}
                </div>
            </div>
            <div className='w-full p-3 flex flex-row gap-2 items-center justify-center'>
                <input
                    id='categoryInput'
                    className="w-auto hover:bg-background focus:bg-background rounded-md px-3 py-2 bg-transparent outline-none text-text"
                    placeholder="Add new category..."
                />
                <button className=''>
                    <FiPlus
                        onClick={addCategory}
                        className="text-primary"
                        size={24} />
                </button>
            </div>
        </div>
    );
};

export default CategoryPanel;
