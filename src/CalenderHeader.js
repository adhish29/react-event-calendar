import React from "react";

function CalenderHeader({ dateDisplay, onNext, onBack }) {
  return (
    <div className="header">
      <div className="monthDisplay">{dateDisplay}</div>
      <div>
        <button className="back" onClick={onBack}>
          Back
        </button>
        <button className="next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default CalenderHeader;
