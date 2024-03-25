import useBooks from './../../Hook/useBooks';
import Book from './Book';
function Books() {
  const { data } = useBooks();
  return (
    <div className="my-8 md:my-12 space-y-4 md:space-y-6">
      <div>
        <h2 className="text-4xl md:text-6xl font-semibold md:font-bold text-center">Books</h2>
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          data.map((book,index)=> <Book key={index} book={book} />)
        }
      </div>
    </div>
  )
}

export default Books