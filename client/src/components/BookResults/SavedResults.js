import React from "react";
import "./style.css";
import API from "../../utils/API";

function SearchResults(props) {  

  function handleDeleteBtnClick(event) {
    let el = event.target.parentElement;
    let book = el.children[2].children[4].innerText;
    API.deleteBook(book.slice(4, book.length))
  }
    
  return (
    <div className="container-fluid text-left">
      <ul className="search-results">
      {props.savedBooks.map(book => (
          <li key={book.id} className="list-group-item p-3">
            <i className="fa fa-trash float-right" onClick={handleDeleteBtnClick}></i>
            <img className="float-left mr-3" src={book.image} alt={book.title}></img>
            <ul>
                <li><strong>Title: </strong>{book.title}</li>
                <li><strong>Authors: </strong>{book.author}</li>
                <li><strong>Published: </strong>{book.published}</li>
                <li><strong>Page Count: </strong>{book.pageCount}</li>
                <li><strong>ID: </strong>{book.bookID}</li>
            </ul>
            <div><strong>Description: </strong>{book.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
