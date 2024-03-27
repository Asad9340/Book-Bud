import { useEffect, useState } from "react"

function useBooks() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async() => {
      const res = await fetch('./booksData.json');
      const data =await res.json();
      setData(data);
    })()
  },[])
  return {data}
}

export default useBooks