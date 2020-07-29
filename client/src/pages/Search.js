import React, { useState } from "react";
import SearchResults from "../components/BookResults/SearchResults";
import axios from "axios";

function Search() {

    const [search, setSearch] = useState();
    const [results, setResults] = useState([]);

    let noSearch = "";
    if (results.length === 0) {
        noSearch = "Enter a book title above to find books!";
    } else {
        noSearch = ""
    }

    function handleInputChange(event) {
        setSearch(event.target.value.replace(/\s/g, ''));
    };

    function onKeyPress(target) {
        if(target.charCode === 13){
            handleFormSubmit();
        } 
    }
    
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
                <input onKeyPress={onKeyPress} onChange={handleInputChange}></input>
                <button className="btn btn-sm btn-secondary ml-3" type="submit" onClick={handleFormSubmit} >Search</button>
            </div>
            <h3 id="helper-text" className="text-center">{noSearch}</h3>
            <SearchResults results={results} />
        </div>
    );
}

export default Search;