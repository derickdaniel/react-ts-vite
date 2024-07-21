import "bootstrap/dist/css/bootstrap.css";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  // use const if no reassign needed
  let items = ["New York", "San Francisco", "London", "Paris"];

  const handleItemSelect = (item: string) => {
    console.log("From App.tsx", item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onItemSelect={handleItemSelect}
      />
      {/* {Array(1).fill(true).map((_, i) => <AlertComp key={i} />)} */}
      <AlertComp/>

      
      <Table></Table>
    </div>
  );
}

function AlertComp() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      <br></br><br></br>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button
        name={"Show Alert"}
        handleClick={() => setAlertVisible(true)}
      ></Button>
    </>
  );
}


export default App;
