import React, { useState } from 'react';

function DropdownMenu() {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex items-center justify-center w-full rounded-md border border-teal-500 shadow-md px-4 py-2 bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="listbox"
                >
                    Open Dropdown
                    <i className={`ml-2 fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-teal-500 ring-opacity-50">
                    <div
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div role="none">
                            <button
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={toggleDropdown}
                            >
                                Option 1
                            </button>
                            <button
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={toggleDropdown}
                            >
                                Option 2
                            </button>
                            <button
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                                onClick={toggleDropdown}
                            >
                                Option 3
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
