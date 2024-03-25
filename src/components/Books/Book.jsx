import { FaStarHalfStroke } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
function Book({ book }) {
  const { bookId, image, tags, author, bookName, category, rating } = book;
  return (
    <NavLink to={`/book-details/${bookId}`}>
      <div className="p-2 md:p-3 rounded-lg space-y-4 border m-4">
        <div>
          <img className="rounded-lg h-[450px] w-full" src={image} alt="" />
        </div>
        <div className="flex gap-4">
          <p className="text-[#23BE0A] bg-[#23BE0A0D] px-6 py-1 rounded-full">
            {tags[0]}
          </p>
          <p className="text-[#23BE0A] bg-[#23BE0A0D] px-6 py-1 rounded-full">
            {tags[1]}
          </p>
        </div>
        <div className="space-y-3 my-3">
          <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-[#131313]">
            {bookName}
          </h2>
          <p className="text-[#131313CC] font-medium">By: {author}</p>
        </div>
        <hr className="border border-[#13131326] border-dashed" />
        <div className="flex justify-between gap-4">
          <p>{category}</p>
          <div className="flex items-center gap-2">
            <p>{rating}</p>
            <FaStarHalfStroke />
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Book;
