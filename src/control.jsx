import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      className="button is-dark is-large"
      aria-label="Start count down"
      style={{ margin: 5 }}
      {...props}
    >
      {children}
    </button>
  );
}

export function Checkbox({ text, onChange }) {
  return (
    <div className="control">
      <label className="checkbox">
        <input type="checkbox" name="type" onChange={onChange} />
        {text}
      </label>
    </div>
  );
}
