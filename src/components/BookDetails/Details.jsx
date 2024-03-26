import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import {
  getFromLocalStorage,
  saveLocalStorage,
} from '../../utils/localStorage';
import { toast } from 'react-toastify';

function Details({ book }) {
  const handleRead = () => {
    saveLocalStorage(book, 'books');
  };
  const handleWishlist = bookId => {
    const data = getFromLocalStorage('books');
    const bookList = data.find(item => Object.values(item).includes(bookId));
    const dataFromWishlist = getFromLocalStorage('wishlist');
    const wishlist = dataFromWishlist.find(item =>
      Object.values(item).includes(bookId)
    );
    if (!bookList && !wishlist) {
      saveLocalStorage(book, 'wishlist');
      toast.success('Added to wishlist', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else if (bookList) {
      toast.warn('Already exist in  Read Books', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.warn('Already exist in wishlist', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };
  const {
    bookId,
    image,
    tags,
    author,
    bookName,
    category,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="my-6 md:my-12">
      <Card className=" flex-col lg:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="lg:w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h2" color="black" className="mb-4 uppercase">
            {bookName}
          </Typography>
          <Typography className="mb-2">
            <span className="text-[#131313CC] text-lg md:text-xl font-medium">
              By: {author}
            </span>
          </Typography>{' '}
          <hr />
          <Typography
            variant="h6"
            className="my-3 text-xl text-[#131313CC] font-medium"
          >
            {category}
          </Typography>{' '}
          <hr />
          <Typography color="gray" className="mb-8 font-normal">
            <span>Review: </span>
            {review}
          </Typography>
          <div className="flex gap-4 items-center mb-4">
            <p className="text-lg font-semibold">Tag: </p>
            <p className="text-[#23BE0A] bg-[#23BE0A0D] px-6 py-2 rounded-full">
              #{tags[0]}
            </p>
            <p className="text-[#23BE0A] bg-[#23BE0A0D] px-6 py-2 rounded-full">
              #{tags[1]}
            </p>
          </div>
          <hr />
          <div className="mt-4 grid grid-cols-3">
            <div className="space-y-3 text-[#131313B2]">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="col-span-2 space-y-3">
              <p className="text-[#131313] font-semibold">{totalPages}</p>
              <p className="text-[#131313] font-semibold">{publisher}</p>
              <p className="text-[#131313] font-semibold">{yearOfPublishing}</p>
              <p className="text-[#131313] font-semibold">{rating}</p>
            </div>
          </div>
          <div className="mt-4 md:mt-12 flex gap-4 md:gap-8">
            <Button onClick={handleRead} variant="outlined">
              Read
            </Button>
            <Button
              onClick={() => handleWishlist(bookId)}
              className="bg-[#50B1C9]"
            >
              Wishlist
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Details;
