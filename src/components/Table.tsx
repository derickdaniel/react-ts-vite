const colNames = ["New York", "San Francisco", "London", "Paris", "Albania"]

interface Props {
  data: any[];
}

function Table(props: Props) {
  return (
    <table className="table">
      <thead>
        <tr>
          {colNames.map((col) => {
            return <th>{col}</th>;
          })}
        </tr>
      </thead>
      {props.data.map((val, index) => {
        return (
          <tbody>
            <tr key={val.id}>
              <td>{index}</td>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

export default Table;
