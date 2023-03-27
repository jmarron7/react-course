function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];
  //items = [];

  return (
    // <> Fragment same as <Fragment>
    <>
      <h1>LIST</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
