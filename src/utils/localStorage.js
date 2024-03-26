import { toast } from 'react-toastify';

export default localStorage;
export const saveLocalStorage = (data, key) => {
  const saveData = JSON.parse(localStorage.getItem(key)) || [];
  const isExists = saveData.find(item => item.bookId === data.bookId);
  if (!isExists) {
    saveData.push(data);
    localStorage.setItem(key, JSON.stringify(saveData));
    if (key === 'books') {
      toast.success('Added book to read list', {
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
  } else {
    if (key === 'books') {
      toast.warn('Already Exist book to read list', {
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
  }
};
export const getFromLocalStorage = key => {
  const storageData = JSON.parse(localStorage.getItem(key)) || [];
  return storageData;
};


