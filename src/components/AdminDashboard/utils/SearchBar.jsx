// SearchBar.js
import { useState } from "react";
const SearchBar = ({ data, setFiltered }) => {
    console.log('data from search', data)
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        if (searchTerm.length === 0) {
            setFiltered(data); // Set filtered data back to the original data array
            return; // Exit early since no filtering is needed
        }
        if (data) {
            const filtered = data.filter(item => {
                // Ensure item and item.name are not undefined
                if (item && item.name) {
                    return item.name.toLowerCase().includes(searchTerm);
                }
                return false;
            });

            setFiltered(filtered);
            console.log('filtered from search ', filtered);
        }
    };


    return (
        <div className="px-8 flex sm:flex-row flex-col">


            <section className="block relative w-full">
                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                        <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z" />
                    </svg>
                </span>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search Here"
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
            </section>
        </div>
    );
};

export default SearchBar;
