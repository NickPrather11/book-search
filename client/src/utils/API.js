import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  searchBook: function(title, author) {
    const APIkey = "AIzaSyDrM4Q83ZO3gg_bzVjpsSHHAlbqTqRHR8Q";
    if (title && author) {
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${APIkey}`);
    } else if (title) {
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${APIkey}`);
    } else if (author) {
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${author}&key=${APIkey}`);
    }
  }
};
