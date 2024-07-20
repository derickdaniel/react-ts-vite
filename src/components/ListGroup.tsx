import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup(props: Props) {
  // HOOK
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <span>No items found!!</span>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
