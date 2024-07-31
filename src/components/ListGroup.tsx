import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onItemSelect: (item: string) => void;
}

function ListGroup(props: Props) {
  console.log("LG componenent");
  // HOOK
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <span>No items found!!</span>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              props.onItemSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
