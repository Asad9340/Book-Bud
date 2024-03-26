function EmptyPageMessage({ message }) {
  return (
    <div className="my-8 text-2xl font-medium">
      <h1>Please add some books to {message}.</h1>
    </div>
  );
}

export default EmptyPageMessage;
