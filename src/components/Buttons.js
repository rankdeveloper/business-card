import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Buttons() {
  return (
    <div className="buttons">
      <div className="email">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <span> Email</span>
      </div>

      <div className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <span> Linkedin</span>
      </div>
    </div>
  );
}

export default Buttons;
