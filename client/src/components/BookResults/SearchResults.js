import React from "react";
import "./style.css";
import API from "../../utils/API";

function SearchResults(props) {  

  function handleSaveBtnClick(event) {
    let el = event.target.parentElement;
    let image = el.parentElement.children[0].children[1].src;
    let title = el.children[2].children[0].innerText;
    let authors = el.children[2].children[1].innerText;
    let published = el.children[2].children[2].innerText;
    let pages = el.children[2].children[3].innerText;
    let id = el.children[2].children[4].innerText;
    let description = el.parentElement.children[0].children[3].innerText;

    API.saveBook({
      image: image,
      title: title.slice(7, title.length),
      authors: authors.slice(9, authors.length),
      published: published.slice(11, 15),
      pageCount: pages.slice(11, pages.length),
      bookID: id.slice(4, id.length),
      description: description.slice(13, description.length)
    })
  }

  // fix for unique key when it throws error
  let backupID = 0;
    
  return (
    <div className="container-fluid text-left">
      <ul className="search-results">
        {props.results.map(book => (
          <li key={book.bookID === undefined ? backupID++ : `${book.bookID}`} className="list-group-item p-3">
              <i className="fa fa-heart float-right" onClick={handleSaveBtnClick}></i>
              <img className="float-left mr-3" src={book.volumeInfo.imageLinks === undefined ? "" : `${book.volumeInfo.imageLinks.thumbnail}`} alt={book.volumeInfo.title}></img>
              <ul>
                  <li><strong>Title: </strong>{book.volumeInfo.title}</li>
                  <li><strong>Authors: </strong>{book.volumeInfo.authors}</li>
                  <li><strong>Published: </strong>{book.volumeInfo.publishedDate.slice(0, 4)}</li>
                  <li><strong>Page Count: </strong>{book.volumeInfo.pageCount}</li>
                  <li><strong>ID: </strong>{book.id}</li>
              </ul>
              <div><strong>Description: </strong>{book.volumeInfo.description}</div>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
