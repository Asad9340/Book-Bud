import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  getFromLocalStorage} from '../../utils/localStorage';
import ReadBooks from '../../components/ReadBooks/ReadBooks';
import Wishlist from '../../components/Wishlist/Wishlist';
import { useEffect, useState } from 'react';

function ListedBooks() {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  useEffect(() => {
    setReadList(getFromLocalStorage('books'));
    setWishList(getFromLocalStorage('wishlist'));
  }, []);
  const handleSelectChange = event => {
    if (event.target.value === 'all') {
      setReadList(getFromLocalStorage('books'));
    } else if (event.target.value === 'rating') {
      const sortedOnRating = readList.sort((a, b) => b.rating - a.rating);
      setReadList([...sortedOnRating]);
      setWishList([...sortedOnRating]);
    } else if (event.target.value === 'numberOfPages') {
      const sortOnPageNumber = readList.sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setReadList([...sortOnPageNumber]);
      setWishList([...sortOnPageNumber]);
    } else if (event.target.value === 'publishedYear') {
      const sortOnPublishingYear = readList.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadList([...sortOnPublishingYear]);
      setWishList([...sortOnPublishingYear]);
    }
  };

  return (
    <div>
      <div className="my-8 md:my-12">
        <h2 className="text-3xl bg-[#1313130D] py-8 font-semibold md:font-bold rounded-lg w-full text-center">
          {' '}
          Books
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center">
          <div className="flex justify-center my-4">
            <select
              onChange={handleSelectChange}
              className="bg-slate-200 block h-10 w-52 rounded-md border border-gray-800"
              name="option"
              id=""
            >
              <option value="all">All</option>
              <option value="rating">Rating</option>
              <option value="numberOfPages">Number Of Pages</option>
              <option value="publishedYear">Published Year</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            {readList.map((book, index) => (
              <ReadBooks key={index} book={book} />
            ))}
          </TabPanel>
          <TabPanel>
            {wishList.map((book, index) => (
              <Wishlist key={index} book={book} />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default ListedBooks;
