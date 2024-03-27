import { useLoaderData } from "react-router-dom";
import LegacyBook from "../../components/LegacyBook/LegacyBook";

function LegacyBooks() {
  const data = useLoaderData();
  console.log(data)
  return (
    <div className="md:my-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold md:font-bold text-center">
          The Timeless Canon: Enduring Works of Literature
        </h2>
        <p className="px-6 md:px-12 text-center">
          Legacy books endure beyond their time, enriching culture with timeless
          themes and characters. Their literary excellence captivates
          generations, shaping societal discourse and artistic expression. These
          classics stand as testaments to the enduring power of storytelling,
          leaving an indelible mark on the human experience.
        </p>
      </div>
      <div>
        {
          data.map((item,index)=><LegacyBook key={index} book={item}  />)
        }
      </div>
    </div>
  );
}

export default LegacyBooks;