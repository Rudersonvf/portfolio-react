import { Link } from "react-router-dom";
import "./styles.css";

export default function ArrowBack() {
  return (
    <div className="pf-arrow-container stick">
      <Link to={"/home"}>
        <svg x="0px" y="0px" viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M244 400L100 256l144-144M120 256h292"
          />
        </svg>
      </Link>
    </div>
  );
}
