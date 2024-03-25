import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../utils/localStorage';
import ReadBooks from '../../components/ReadBooks/ReadBooks';
import Wishlist from '../../components/Wishlist/Wishlist';

function ListedBooks() {
  const readBookList = getFromLocalStorage('books');
  console.log(readBookList);
  const wishList = getFromLocalStorage('wishlist');
  console.log(wishList);
  return (
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
  );
}

export default ListedBooks;
