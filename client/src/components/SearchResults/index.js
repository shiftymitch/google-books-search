import React from "react";
import "./style.css";

function SearchResults(props) {  
  let state = props.search || "";
  return (
    <div className="text-center">
      <ul className="search-results">
        
      </ul>
    </div>
  );
}

export default SearchResults;
