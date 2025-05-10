import React, { useState } from 'react';
import { IBook } from '../interfaces/IBook.interface'
import useForm from '../hooks/useForm';

interface BookFormProps {
    onAddBook: (book: IBook) => void;
}

const BookForm = ({ onAddBook }: BookFormProps) => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [year, setYear] = useState<number>();

    const { validate } = useForm();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { errors, hasErrors} = validate({
            id: 0,
            title,
            author,
            year
        })
        
        if (!hasErrors) {
            const newBook: IBook = {
                id: Date.now(),
                title,
                author,
                year: Number(year),
            };
            onAddBook(newBook);
            setTitle('');
            setAuthor('');
            setYear(undefined);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="author">Autor:</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="year">Ano:</label>
                <input
                    type="number"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.valueAsNumber)}
                    required
                />
            </div>
            <button type="submit">Cadastrar Livro</button>
        </form>
    );
};

export default BookForm;
