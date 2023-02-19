import React from 'react';
import axios from 'axios'; // import axios to make HTTP requests
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        // Make an HTTP GET request to fetch all books
        const res = await axios.get('http://localhost:8800/books');
        setBooks(res.data); // Update the state with the fetched data
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllBooks(); // Call the function to fetch books
  }, []); // useEffect runs only once because of the empty dependency array

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id)
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Phill's books</h1>
      {/* Render the books fetched from the server */}
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new book</Link>
      </button>
    </div>
  );
};

export default Books;
