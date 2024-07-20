import "bootstrap/dist/css/bootstrap.css";

import ListGroup from "./components/ListGroup";
import ProductList from "./components/ProductList.jsx";

function App() {
  // use const if no reassign needed
  let items = ["New York", "San Francisco", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
      <br></br>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
