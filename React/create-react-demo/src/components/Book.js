import { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="list-books-1">
        <h2>Our book colection</h2>
        {this.props.books.map(x => {
         return (
            <p>Title {x.title} Author {x.director}</p>
         )
        })}
    </div>;
  }
}

export default Book;
