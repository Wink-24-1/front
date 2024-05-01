import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListBlock({ category, url, title }) {
  let icon;
  if (category === 1) {
    icon = <FontAwesomeIcon icon={faFire} size="3x" />;
  } else if (category === 2) {
    icon = <FontAwesomeIcon icon={faSlack} size="3x" />;
  } else if (category === 3) {
    icon = <FontAwesomeIcon icon={faFire} size="3x" />;
  } else if (category === 4) {
    icon = <FontAwesomeIcon icon={faFire} size="3x" />;
  } else {
    icon = <FontAwesomeIcon icon={faSlack} size="3x" />;
  }

  console.log(category);

  return (
    <a
      className="min-w-40 h-40 p-3 bg-main-color place-content-center text-center gap-9"
      href={url}
    >
      <div>{icon}</div>
      <div className="font-semibold mt-3">{title}</div>
    </a>
  );
}

export default ListBlock;
