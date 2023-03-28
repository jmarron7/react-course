import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/";
import { DiGithub } from "react-icons/di";
import Like from "./components/Like";

function App() {
  const items = ["Miami", "New York", "Los Angeles"];
  return (
    <>
      <Like onClick={() => console.log("Liked")} />
      <ListGroup items={items} heading="Cities"></ListGroup>
    </>
  );
}

export default App;
