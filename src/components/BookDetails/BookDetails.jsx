import { useParams } from 'react-router-dom';
import useBooks from '../../Hook/useBooks';
import Details from './Details';
import Spinner from '../Spinner/Spinner';

function BookDetails() {
  const { bookId } = useParams();
  const { data } = useBooks();
  const specificBook = data.filter(book => book.bookId === Number(bookId));
  return (
    <div>
      {specificBook.length ? (
        specificBook.map((book, index) => <Details key={index} book={book} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default BookDetails;
