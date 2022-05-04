import React, { useState } from "react";

function NewEventModal({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState(false);
  return (
    <>
      <div id="newEventModal">
        <h2>New Event</h2>
        <input
          type="text"
          id="eventTitleInput"
          className={error ? "error" : ""}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event title..."
        />
        <button
          id="saveButton"
          onClick={() => {
            if (title) onSave(title);
            else setError(true);
          }}
        >
          Save
        </button>
        <button id="cancelButton" onClick={onClose}>
          Cancel
        </button>
      </div>
      <div id="modal"></div>
    </>
  );
}

export default NewEventModal;
