import classes from "./Tile.module.css";

const Tile = (props) => {
  const tile = props.tile;
  let className = classes.tile;
  switch (tile.status) {
    case "SELECTED":
      className += " " + classes.selected;
      break;
    case "INCORRECT":
      className += " " + classes.incorrect;
      break;
    case "CORRECT":
      className += " " + classes.success;
      break;
    case "WARN":
      className += " " + classes.warn;
      break;
    case "DISABLED":
      className += " " + classes.disabled;
      break;
    default:
      break;
  }

  return (
    <div key={tile.id} className={className}>
      {tile.value}
    </div>
  );
};
export default Tile;