import { getFromLocalStorage } from '../../utils/localStorage';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import EmptyPageMessage from './../../components/EmptyPageMessage';

function PagesToRead() {
  const data = getFromLocalStorage('books');
  console.log(data);
  // const data = [
  //   { name: 'Book 1', page: 400 },
  //   { name: 'Book 2', page: 500 },
  //   { name: 'Book 3', page: 300 },
  // ];
  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;
  return (
    <div className="flex flex-col items-center my-8 md:my-12">
      {data.length > 0 ? (
        <BarChart width={900} height={400} data={data}>
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
        </BarChart>
      ) : (
        <EmptyPageMessage message="Show the Chart" />
      )}
    </div>
  );
}

export default PagesToRead;
