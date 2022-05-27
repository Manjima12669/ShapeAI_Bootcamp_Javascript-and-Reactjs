import React from "react";
function Note({ heading, description }) {
  return (
    <div className="note">
      <h1> {heading} </h1>
      <p>
        {description}
      </p>
    </div>
  );
}

export default Note;
