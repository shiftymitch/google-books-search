import React, { useEffect, useState } from "react";
import SearchResults from "../components/SearchResults/SearchResults";
import axios from "axios";

function Search() {

    const [title, setTitle] = useState();
    const [results, setResults] = useState([]);

    useEffect(() => {
        
    })

    function handleInputChange(event) {
        setTitle(event.target.value.replace(/\s/g, ''));
    };
    
    function handleFormSubmit() {
        axios.get(`/api/books/${title}`)
            .then(res => {
                setResults(res.data);
            })
            .catch(e => console.log(e));
    };

    return (
        <div className="text-center p-5">
            <h3 className="text-center">Google Books Search</h3>
            <div className="mb-3">
                <label className="mr-3">Book Title</label>
                <input onChange={handleInputChange}></input>
                <button className="btn btn-sm btn-outline-secondary ml-3" type="submit" onClick={handleFormSubmit}>Search</button>
            </div>
            <SearchResults results={results} />
        </div>
    );
}

export default Search;