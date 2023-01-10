import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faTwitterSquare,
  faGithubSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
      <FontAwesomeIcon icon={faFacebookSquare} className="icon" />

      <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
      <FontAwesomeIcon icon={faGithubSquare} className="icon" />
    </div>
  );
}

export default Footer;
