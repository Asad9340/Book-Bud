import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../utils/localStorage';
import ReadBooks from '../../components/ReadBooks/ReadBooks';
import Wishlist from '../../components/Wishlist/Wishlist';

function ListedBooks() {
  const readBookList = getFromLocalStorage('books');
  const wishList = getFromLocalStorage('wishlist');
  return (
    <div>
      <div className='my-8 md:my-12'>
        <h2 className="text-3xl bg-[#1313130D] py-8 font-semibold md:font-bold rounded-lg w-full text-center"> Books</h2>
        <div></div>
      </div>
      <div>
        <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            {readBookList.map((book, index) => (
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
