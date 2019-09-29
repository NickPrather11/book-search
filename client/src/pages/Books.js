import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1 className="jumboTitle bg-secondary text-light">Books On My List</h1>
        </Jumbotron>
        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <DeleteBtn onClick={() => this.handleDelete(book._id)} />
                <img src={book.image} alt="https://via.placeholder.com/150" />
                <a href={book.link} target="_blank">
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                </a>
                <p>{book.description}</p>
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Container>
    );
  }
}

export default Books;
