import React, { useState } from "react";
import SearchResults from "../components/BookResults/SearchResults";
import axios from "axios";

function Search() {

    const [search, setSearch] = useState();
    const [results, setResults] = useState([]);

    function handleInputChange(event) {
        setSearch(event.target.value.replace(/\s/g, ''));
    };
    
    function handleFormSubmit() {
        axios.get(`/api/books/${search}`)
            .then(res => {
                setResults(res.data);
            })
            .catch(e => console.log(e));
    };

    return (
        <div className="search-header text-center p-3">
            <h3 className="text-center">Google Books Search</h3>
            <div className="mb-3">
                <label className="mr-3">Book Title</label>
                <input onChange={handleInputChange}></input>
                <button className="btn btn-sm btn-secondary ml-3" type="submit" onClick={handleFormSubmit}>Search</button>
            </div>
            <SearchResults results={results} />
        </div>
    );
}

export default Search;