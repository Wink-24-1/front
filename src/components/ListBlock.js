import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

const REACT_APP_MAIN_URL = process.env.REACT_APP_MAIN_URL;

function ListBlock({ title }) {
  let { categoryName } = useParams();

  let icon;
  if (categoryName === 1) {
    icon = <FontAwesomeIcon icon={faFire} size="3x" />;
  } else if (categoryName === 2) {
    icon = <FontAwesomeIcon icon={faSlack} size="3x" />;
  } else if (categoryName === 3) {
    icon = <FontAwesomeIcon icon={faFire} size="3x" />;
  } else if (categoryName === 4) {
    icon = <FontAwesomeIcon icon={faFire} size="3x" />;
  } else {
    icon = <FontAwesomeIcon icon={faSlack} size="3x" />;
  }

  return (
    <Link
      className="min-w-40 h-40 p-3 bg-main-color place-content-center text-center gap-9"
      to={`/list/${title}`}
    >
      <div>{icon}</div>
      <div className="font-semibold mt-3">{title}</div>
    </Link>
  );
}

export default ListBlock;
