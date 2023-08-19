import { Component } from "react";
import Book from "./Book";

const BooksData = [{title: "The king", director: "Unknown"}, {title: "The Quen", director: "Unknow"},{title: "The shmatka", director: "nai-golemiq"}]
class BookList extends Component {

  render() {
    return (
      <div>
        <Book books={BooksData}/>
      </div>
    );
  }
}

export default BookList
