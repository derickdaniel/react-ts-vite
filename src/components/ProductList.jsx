import { useState } from "react";
import Button from "./Button.jsx";

/* product list */

function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
    </>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr scope="row">
      <th colSpan="5" style={{ color: "green" }}>
        <h4>{category}</h4>
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr scope="row">
      <td scope="col">{name}</td>
      <td scope="col">{product.price}</td>
      <td scope="col" width={500}>
        <AddItem
          stocked={product.stocked}
        ></AddItem>
      </td>
      <td scope="col">tbc</td>
      <td scope="col">Doesn't work</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
          <th>Qty</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />{" "}
      &nbsp;&nbsp;
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

function AddItem({ stocked }) {
  const [quantity, setQuantity] = useState(0);
  return stocked ? (
    <>
      <Button
        name={"Add To Cart"}
        handleClick= {() => console.log("quantity: "+quantity)}
        onClick={() => console.log("quantity: "+quantity)}
      ></Button>
      <input
        type="number"
        defaultValue={0}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      ></input>
    </>
  ) : (
    <span>
      <i>Item out of stock</i>
    </span>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default ProductList;
