import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../utils/localStorage';
import ReadBooks from '../../components/BookDetails/ReadBooks/ReadBooks';

function ListedBooks() {
  const readBookList = getFromLocalStorage();
  console.log(readBookList);
  return (
    <div>
      <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          {
            readBookList.map((book,index)=><ReadBooks key={index} book={book} />)
          }
        </TabPanel>
        <TabPanel>hello 2</TabPanel>
      </Tabs>
    </div>
  );
}

export default ListedBooks;
