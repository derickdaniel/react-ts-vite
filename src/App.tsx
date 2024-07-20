import "bootstrap/dist/css/bootstrap.css";

import ListGroup from "./components/ListGroup";
import ProductList from "./components/ProductList.jsx";

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
      <br></br>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
