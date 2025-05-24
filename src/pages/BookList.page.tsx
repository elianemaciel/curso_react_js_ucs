
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IBook } from '../interfaces/IBook.interface';
import PotterAPI from '../services/potter-api';

const BookList = () => {
    const potterService = useMemo(() => new PotterAPI(), [])
    const [books, setBooks] = useState<IBook[]>()

    const handleGetBooks = useCallback(async () => {
        const response: any = await potterService.getBooks();
        console.log(response)
        const listBooks = response.data.map((item: any) => {
            return {
                title: item.title,
                id: item.number,
                author: 'J. K. Rowling'
            }
        })
        setBooks(listBooks)
    }, [potterService])

    useEffect(() => {
        handleGetBooks()
    }, [handleGetBooks])

    return (
        <div>
            <h2>Lista de Livros</h2>
            <ul>
                {books?.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> - {book.author} ({book.year})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
