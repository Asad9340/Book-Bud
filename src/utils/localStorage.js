export const saveLocalStorage = (data,key) => {
  const saveData = JSON.parse(localStorage.getItem(key)) || [];
  const isExists = saveData.find(item => item.bookId === data.bookId);
  if (!isExists) {
    saveData.push(data);
    localStorage.setItem(key,JSON.stringify(saveData));
  } else {
    alert('already saved');//ekhane tost hobe je eta read list e ache;
  }
};


export const getFromLocalStorage = (key) => {
  console.log(key)
  const storageData = JSON.parse(localStorage.getItem(key)) || [];
  return storageData;
}
