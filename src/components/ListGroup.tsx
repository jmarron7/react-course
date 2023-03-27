function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];

  return (
    // <> Fragment same as <Fragment>
    <>
      <h1>LIST</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
