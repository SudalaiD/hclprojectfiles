import React,{useState,useEffect} from 'react'
import './Books.css'
import image from './bookimage1.jpg'
import axios from 'axios'

function Books() {
    const [books,setBooks] = useState([])

   useEffect(
       () => {
        axios.get("http://localhost:5000/booklist").then(res => {
            console.log(res.data)
            setBooks(res.data)
        })
        }, []
    )
    
    return (
        <div className="books">
            <div className="book__header">
            <h3>Welcome User</h3>
            <input type="text" className="book__input" />
             </div>
            <div className="book__list">
            {books.map(book => (
            <div className="book__card">
            <img src={image} alt="" />
            <div className="book__carddetails">
            <h3>{book.bookname}</h3>
            <p>{book.author}</p>
            <p>{book.category}</p>
            </div>
            </div>
            ))}

           

            

            </div>
            <div className="book_pagination">
            </div>
        </div>
    )
}

export default Books
