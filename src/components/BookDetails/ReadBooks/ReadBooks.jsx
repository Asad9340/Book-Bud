import { IoLocation } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
function ReadBooks({ book }) {
  const {
    image,
    tags,
    author,
    bookName,
    category,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="grid gap-8 grid-cols-4 mt-6 md:mt-12 border p-3 rounded-lg">
      <div>
        <img className="h-[350px] w-full rounded-lg" src={image} alt="" />
      </div>
      <div className="col-span-3 flex flex-col justify-between my-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold md:font-bold">
            {bookName}
          </h2>
          <p className="text-[#131313CC] font-medium mt-2">By: {author}</p>
        </div>
        <div className="flex gap-4 items-center my-3">
          <div className="flex gap-4 items-center">
            <p className="text-lg font-semibold">Tag: </p>
            <p className="text-[#23BE0A] bg-[#23BE0A0D] px-6 py-1 rounded-full">
              #{tags[0]}
            </p>
            <p className="text-[#23BE0A] bg-[#23BE0A0D] px-6 py-1 rounded-full">
              #{tags[1]}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <IoLocation />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex gap-6 items-center text-[#13131399]">
          <div className="flex gap-2 items-center">
            <FaUser />
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdContactPage />
            <p>Page: {totalPages}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-[#328EFF26] text-[#328EFF] px-4 py-2 rounded-full">
            Category: {category}
          </button>
          <button className="bg-[#FFAC3326] text-[#FFAC33] px-4 py-2 rounded-full">
            Rating: {rating}
          </button>
          <button className="bg-[#23BE0A] text-white px-4 py-2 rounded-full">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadBooks;
