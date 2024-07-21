interface Props {
  name: string;
  handleClick: () => void;
}

function Button(props: Props) {
  return (
    <button className="btn btn-primary" onClick={props.handleClick}>
      {props.name}
    </button>
  );
}

export default Button;
