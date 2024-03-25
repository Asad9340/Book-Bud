export const saveLocalStorage = data => {
  const saveData = JSON.parse(localStorage.getItem('books')) || [];
  const isExists = saveData.find(item => item.bookId === data.bookId);
  if (!isExists) {
    saveData.push(data);
    localStorage.setItem('books',JSON.stringify(saveData));
  } else {
    alert('already saved');
  }
};


export const getFromLocalStorage = () => {
  const storageData = JSON.parse(localStorage.getItem('books')) || [];
  return storageData;
}
