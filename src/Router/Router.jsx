import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Error from '../Pages/Error/Error';
import Homepage from '../Pages/Home/Homepage/Homepage';
import BookDetails from '../components/BookDetails/BookDetails';
import ListedBooks from '../Pages/ListedBooks/ListedBooks';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';
import About from '../Pages/About/About';
import LegacyBooks from '../Pages/LegacyBooks/LegacyBooks';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/book-details/:bookId',
        element: <BookDetails />,
      },
      {
        path: '/listed-books',
        element: <ListedBooks />,
      },
      {
        path: '/to-read',
        element: <PagesToRead />,
      },
      {
        path: '/legacy-books',
        element: <LegacyBooks />,
        loader:()=> fetch('./legacyBooks.json'),
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);
