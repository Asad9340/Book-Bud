function EmptyPageMessage({ message }) {
  return (
    <div className="my-8 text-2xl font-medium text-center border border-gray-700 rounded-lg py-4">
      <h1>Please add some books to {message}.</h1>
    </div>
  );
}

export default EmptyPageMessage;
