import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
//import Footer from "./components/Footer";
import DevIssueTable from "./components/DevIssueTable";
import { Issues } from "./api/DevIssueAPI";
import Login from "./api/Login";
import { useState } from "react";

//routing
import { Routes, Route } from "react-router-dom";

function App() {
  // use const if no reassign needed
  let items = ["New York", "San Francisco", "London", "Paris", "Albania"];

  const data2 = [
    { id: "1", name: "Anom", age: 21, gender: "Male" },
    { id: "2", name: "Megha", age: 19, gender: "Female" },
    { id: "3", name: "Subham", age: 25, gender: "Male" },
  ];

  const handleItemSelect = (item: string) => {
    console.log("From App.tsx", item);
  };

  // to delete later
  const [data, setData] = useState([]);
  Login();
  Issues({ setData });

  return (
    <div>
      <NavBar/>
      <br></br>
      <Routes>
        <Route path="/" element={<DevIssueTable data={data} />} />
        <Route path="/table" element={<Table data={data2} />} />
        <Route
          path="/listGrp"
          element={
            <ListGroup
              items={items}
              heading="Cities"
              onItemSelect={handleItemSelect}
            />
          }
        />
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
    </div>
  );
}

function AlertComp() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div key="alertKey">
      <br></br>
      <br></br>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button
        name={"Show Alert"}
        handleClick={() => setAlertVisible(true)}
      ></Button>
    </div>
  );
}

export default App;
