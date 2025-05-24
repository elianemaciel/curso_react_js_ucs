import { IBook } from '../interfaces/IBook.interface';

interface BookForm {
  title: string;
  author: string;
  year: string;
}
const useForm = () => {
  function validate(values: IBook) {
    const errors: BookForm = {
      title: '',
      author: '',
      year: '',
    };
    let hasErrors = false;
    if (!values.title) {
      errors.title = 'O title é obrigatório';
      hasErrors = true;
    }
    if (!values.author) {
      errors.author = 'O autor é obrigatório';
      hasErrors = true;
    }
    if (!values.year) {
      errors.year = 'O ano é obrigatório';
      hasErrors = true;
    }
    return {
      errors,
      hasErrors,
    };
  }
  return { validate };
};

export default useForm;
