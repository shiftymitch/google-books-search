import React from "react";
import "./style.css";
import API from "../../utils/API";

function SearchResults(props) {  

  function handleSaveBtnClick(event) {
    let el = event.target.parentElement;
    let title = el.children[2].children[0].innerText;
    let author = el.children[2].children[1].innerText;
    let published = el.children[2].children[2].innerText;
    let pages = el.children[2].children[3].innerText;
    let description = el.parentElement.children[0].children[3].innerText;

    API.saveBook({
      title: title.slice(7, title.length),
      author: author.slice(9, author.length),
      published: published.slice(11, 15),
      pageCount: pages.slice(11, pages.length),
      description: description.slice(13, description.length)
    })
  }
    
  return (
    <div className="container-fluid text-left">
      <ul className="search-results">
        {props.results.map(book => (
          <li key={book.id} className="list-group-item p-3">
              <i className="fa fa-heart float-right" onClick={handleSaveBtnClick}></i>
              <img className="float-left mr-3" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></img>
              <ul>
                  <li><strong>Title: </strong>{book.volumeInfo.title}</li>
                  <li><strong>Authors: </strong>{book.volumeInfo.authors.join(", ")}</li>
                  <li><strong>Published: </strong>{book.volumeInfo.publishedDate.slice(0, 4)}</li>
                  <li><strong>Page Count: </strong>{book.volumeInfo.pageCount}</li>
              </ul>
              <div><strong>Description: </strong>{book.volumeInfo.description}</div>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
