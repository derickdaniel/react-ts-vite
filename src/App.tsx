import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";

//routing
import { Routes, Route } from "react-router-dom";

function App() {
  // use const if no reassign needed
  let items = ["New York", "San Francisco", "London", "Paris"];

  const handleItemSelect = (item: string) => {
    console.log("From App.tsx", item);
  };

  return (
    <div>
      <NavBar></NavBar>

      {/* <ListGroup
        items={items}
        heading="Cities"
        onItemSelect={handleItemSelect}
      /> */}
      {/* {Array(1).fill(true).map((_, i) => <AlertComp key={i} />)} */}
      {/* <AlertComp />
      <Table></Table> */}

      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/table" element={<Table />} />
        <Route path="/alert" element={<AlertComp />} />
        <Route
          path="/list"
          element={
            <ListGroup
              items={items}
              heading="Cities"
              onItemSelect={handleItemSelect}
            />
          }
        />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

function AlertComp() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      <br></br>
      <br></br>
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
