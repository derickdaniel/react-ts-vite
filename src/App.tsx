import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DevIssueTable from "./components/DevIssueTable";
import { useState, useEffect } from "react";

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
  const reqBody = {
    username: "derick911",
    password: "Derick@123",
  };
  async function login() {
    fetch("http://localhost:8080/authenticate/login", {
      // mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((output) => {
        console.log(output.token);
        localStorage.setItem("access-token", output.token);
      })
      .catch((error) =>
        console.error("The following error occurred during the update", error)
      );
  }

  // useEffect block
  useEffect(() => {
    login();
  }, []);

  async function issues() {
    fetch("http://localhost:8080/dib/issue", {
      // mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) =>
        console.error("The following error occurred during the update", error)
      );
  }

  useEffect(() => {
    issues();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="panel-body">
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

              {/* <Footer></Footer> */}
            </div>
          </div>
        </div>
      </div>
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
