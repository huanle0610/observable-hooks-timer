import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faUndo
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Button, Checkbox } from "./control";

export const TimerBtnGroup = ({ state, onChange, onChangeType }) => (
  <div>
    <Button disabled={state === "started"} onClick={() => onChange("started")}>
      <FontAwesomeIcon icon={faPlayCircle} />
    </Button>
    <Button disabled={state !== "started"} onClick={() => onChange("paused")}>
      <FontAwesomeIcon icon={faPauseCircle} />
    </Button>
    <Button onClick={() => onChange("reset")}>
      <FontAwesomeIcon icon={faUndo} />
    </Button>
    <Checkbox
      text="fancy?"
      onChange={e => {
        onChangeType(e.target.checked ? "fancy" : "plain");
      }}
    />
  </div>
);

TimerBtnGroup.propTypes = {
  state: PropTypes.oneOf(["started", "paused", "reset"]),
  onChange: PropTypes.func.isRequired
};
