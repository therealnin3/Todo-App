import React from 'react';
import { FiArrowLeft, FiCheckSquare, FiSquare, FiPlus } from "react-icons/fi";

const TodoPanel = ({ setSelectedPanel, selectedCategory }) => {
    return (
        <div className='flex flex-col h-full w-full '>
            <span className='text-md px-3 items-center justify-center flex w-full font-semibold text-text'>
                <FiArrowLeft size={24} onClick={() => setSelectedPanel("categories")} />
                <div className='flex-1 flex items-center justify-center'>{selectedCategory.categoryName}</div>
            </span>
            <hr className='mx-2 my-4 border-sectext' />
            <div className='flex-1 w-full flex flex-col gap-3'>
                {selectedCategory.todos.length === 0 ?
                    <div className='flex flex-row gap-2'>
                        No todos
                    </div>
                    :
                    <>
                        {selectedCategory.todos.map((todo) => (
                            <div className='flex flex-row gap-2'>
                                <div>{todo.isComplete ? <FiCheckSquare /> : <FiSquare />}</div>
                                <div>{todo.text}</div>
                            </div>
                        ))}
                    </>
                }
            </div>
            <div className='w-full p-3 flex flex-row gap-2 items-center justify-center'>
                <input
                    id='todoInput'
                    className="w-auto hover:bg-background focus:bg-background rounded-md px-3 py-2 bg-transparent outline-none text-text"
                    placeholder="Add new todo..."
                />
                <button className=''>
                    <FiPlus
                        onClick={() => console.log('add todo')}
                        className="text-primary"
                        size={24} />
                </button>
            </div>
        </div>
    );
};

export default TodoPanel;
