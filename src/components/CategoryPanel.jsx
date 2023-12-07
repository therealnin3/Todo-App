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
        console.log(categories);
        console.log(categories.length);
    }, [categories]);

    // Add new category
    function addCategory() {
        const newCategoryName = document.getElementById('categoryInput').value;

        // Check if input is empty
        if (newCategoryName === '') {
            return;
        }

        // Add new category
        const newCategory = {
            id: categories.length + 1,
            categoryName: newCategoryName,
            todos: []
        }
        setCategories([...categories, newCategory]);

        // Clear input
        document.getElementById('categoryInput').value = '';
    }

    // Delete category
    const deleteCategory = (categoryName) => {
        setCategories(categories.filter(category => category.categoryName !== categoryName));
    }

    return (
        <div className='w-full h-full flex flex-col bg-blue-600'>
            <div className='overflow-y-auto bg-red-500'>
                {categories.length === 0 ?
                    <div className='h-full w-full flex items-center justify-center text-text text-md font-semibold'>
                        No categories added yet...
                    </div>
                    :
                    <div className='flex flex-col gap-2'>
                        {categories.map((category) => (
                            <CategoryItem key={category.id} setSelectedCategory={setSelectedCategory} setSelectedPanel={setSelectedPanel} categoryObject={category} deleteCategoryFunction={deleteCategory} />
                        ))}
                    </div>
                }
            </div>
            <hr className='mx-2 my-4 border-sectext' />
            <div className='w-full flex flex-row gap-2 items-center justify-center rounded-md bg-background px-3 py-2'>
                <input
                    id='categoryInput'
                    className="w-full bg-transparent p-1 rounded-md outline-none text-text"
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
