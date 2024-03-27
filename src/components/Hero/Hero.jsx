import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  md:gap-12 mt-6 md:mt-8 bg-gray-200 rounded-xl p-6 m-4 md:m-0">
      <div className="col-span-2 flex flex-col justify-center items-center md:items-start">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold px-4 mb-4 md:mb-8 text-center md:text-start">
          Books to freshen up your bookshelf
        </h2>
        <Link to="/listed-books">
          <Button className="bg-[#23BE0A] text-md ml-4">Visit The List</Button>
        </Link>
      </div>
      <div className="mt-4 md:mt-0">
        <img
          className="h-[500px] w-full rounded-lg"
          src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532801754i/32716442.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
