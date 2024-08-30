import React, { useState } from 'react';
import ProductCatogries from './ProductCatogries';

export default function Callcatogriesproduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newHeading, setNewHeading] = useState('');
    const [newParagraph, setNewParagraph] = useState('');
    const [information, setInformation] = useState([
        { heading: 'All categories', paragraph: '10' },
        { heading: 'Tablet', paragraph: '5' },
        { heading: 'Laptop', paragraph: '15' },
        { heading: 'Head Phones', paragraph: '9' },
        { heading: 'Others', paragraph: '90' },
    ]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        const newProduct = { heading: newHeading, paragraph: newParagraph };
        setInformation([...information, newProduct]);
        setNewHeading(''); // Clear the input fields after submission
        setNewParagraph('');
        closeModal(); // Close the modal after saving the data
    };

    return (
        <>
            <div>
                {/* Modal Toggle Button */}
                <button
                    onClick={openModal}
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Toggle modal
                </button>

                {/* Main Modal */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
                    >
                        <div className="relative p-4 w-full max-w-2xl max-h-full">
                            {/* Modal Content */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* Modal Header */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add New Category
                                    </h3>
                                    <button
                                        onClick={closeModal}
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/* Modal Body */}
                                <div className="p-4 md:p-5 space-y-4">
                                    <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto">
                                        <label
                                            htmlFor="heading-input"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Category Name
                                        </label>
                                        <input
                                            type="text"
                                            id="heading-input"
                                            value={newHeading}
                                            onChange={(e) => setNewHeading(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter category name"
                                            required
                                        />
                                        <label
                                            htmlFor="paragraph-input"
                                            className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Number of Products
                                        </label>
                                        <input
                                            type="number"
                                            id="paragraph-input"
                                            value={newParagraph}
                                            onChange={(e) => setNewParagraph(e.target.value)}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Enter number of products"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Save
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Display Categories */}
            <div className="">
                {information.map((item, index) => (
                    <ProductCatogries
                        key={index}
                        heading={item.heading}
                        paragraph={item.paragraph}
                    />
                ))}
            </div>
        </>
    );
}
