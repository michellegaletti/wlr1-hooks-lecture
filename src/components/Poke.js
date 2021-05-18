import { Link } from "react-router-dom";

const Poke = (props) => {
  return (
    <div>
      <Link to={`/pokemon/${props.poke.name}`} className="pokemon">
        {props.poke.name}
      </Link>
    </div>
  );
};

export default Poke;
