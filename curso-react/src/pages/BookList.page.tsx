
import React from 'react';
import { IBook } from '../interfaces/IBook.interface';

interface BookListProps {
    books: IBook[];
}

const BookList = ({ books }: BookListProps) => {
    return (
        <div>
            <h2>Lista de Livros</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> - {book.author} ({book.year})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
