import React, { useState } from 'react';
import ProductCatogries from './ProductCatogries';
import Hr from '../hrtag/Hr';
import './call.css'
export default function Callcatogriesproduct({ heading,styles }) {
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
        e.preventDefault();
        const newProduct = { heading: newHeading, paragraph: newParagraph };
        setInformation([...information, newProduct]);
        setNewHeading('');
        setNewParagraph('');
        closeModal();
    };


    return (
        <>
            <div className="manu ">
                <div className='ss flex flex-col  w-72  ml-6 justify-center '>
                    <div className="head flex justify-between p-3 w-80 ">
                        <h1 className='heading cursor-pointer' onClick={openModal}
                        style={styles}>{heading}</h1>
                        <h1 className='reset cursor-pointer' onClick={openModal}>Reset</h1>
                    </div>
                    <div className="pro">
                        {
                            information.map((item, index) => (
                                <ProductCatogries
                                    key={index}
                                    heading={item.heading}
                                    paragraph={item.paragraph}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* <Hr/> */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
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
                                    <label htmlFor="category-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Category</label>
                                    <input
                                        type="text"
                                        id="category-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Category"
                                        required
                                        value={newHeading}
                                        onChange={(e) => setNewHeading(e.target.value)}
                                    />
                                    <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Number</label>
                                    <input
                                        type="text"
                                        id="number-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Number"
                                        required
                                        value={newParagraph}
                                        onChange={(e) => setNewParagraph(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Add Product
                                    </button>
                                </form>
                            </div>
                            {/* Modal Footer */}
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button
                                    onClick={closeModal}
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
