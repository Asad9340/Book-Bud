import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 mt-6 md:mt-8 bg-[#1313130D] rounded-lg p-6 m-4 md:m-0">
      <div className="col-span-2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold px-4 mb-4 md:mb-8">
          Books to freshen up your bookshelf
        </h2>
        <Link to="/listed-books">
          <Button className="bg-[#23BE0A] text-md ml-4">Visit The List</Button>
        </Link>
      </div>
      <div className=" flex items-center justify-center">
        <img
          className="h-[450px] w-full rounded-lg"
          src="https://i.ibb.co/RHpB076/book-cover-To-Kill-a-Mockingbird-many-1961.webp"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
