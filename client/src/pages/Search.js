import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    title: "",
    author: "",
    results: []
  };

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlFormSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.title, this.state.author).then(data => {
      console.log(data.data.items);
      this.setState({ results: data.data.items });
    });
  };

  handleSaveBook = event => {
    event.preventDefault();
    API.saveBook();
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>What Books Should I Read?</h1>
        </Jumbotron>
        <form>
          <Input name="title" placeholder="Title (required)" onChange={this.handleInputChange} />
          <Input name="author" placeholder="Author (required)" onChange={this.handleInputChange} />
          <FormBtn handleFormSubmit={this.handlFormSubmit}>Submit Book</FormBtn>
        </form>
        {this.state.results.length ? (
          <List>
            {this.state.results.map(book => (
              <ListItem>
                <img src={book.volumeInfo.imageLinks.thumbnail} />
                <strong>
                  {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                </strong>
                <p>{book.volumeInfo.description}</p>
                <button onClick={this.handleSaveBook}>SAVE</button>
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

export default Search;