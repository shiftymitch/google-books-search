import React, { useState, useEffect } from "react";
import SavedResults from "../components/BookResults/SavedResults.js";
import API from "../utils/API";

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        API.getBooks()
            .then(res => {
                setSavedBooks(res.data);
            })
    });

    return (
        <div className="text-center p-5">
            <SavedResults savedBooks={savedBooks}/>
        </div>
    );
}

export default Saved;