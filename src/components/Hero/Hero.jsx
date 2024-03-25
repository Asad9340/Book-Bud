import { Button } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto mt-8 md:mt-14">
      <div className="col-span-2 flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold text-center px-4 mb-4 md:mb-8">
          Books to freshen up your bookshelf
        </h2>
        <Button className="bg-[#23BE0A] text-md">Visit The List</Button>
      </div>
      <div>
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
