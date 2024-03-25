import { useParams } from "react-router-dom"
import useBooks from "../../Hook/useBooks";
import Details from "./Details";

function BookDetails() {
  const { bookId } = useParams();
  const { data } = useBooks();
  const specificBook = data.filter((book) => book.bookId === Number(bookId));
  return (
    <div>
      {
        specificBook.map((book,index) =><Details key={index} book={book} />)
      }
    </div>
  )
}

export default BookDetails