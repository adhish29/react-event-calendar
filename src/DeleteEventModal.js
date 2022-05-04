import React from "react";

function DeleteEventModal({ eventText, onClose, onDelete }) {
  return (
    <>
      <div id="deleteEventModal">
        <h2>Event</h2>
        <p id="eventText">{eventText}</p>
        <button id="deleteButton" onClick={onDelete}>
          Delete
        </button>
        <button id="closeButton" onClick={onClose}>
          Close
        </button>
      </div>
      <div id="modal"></div>
    </>
  );
}

export default DeleteEventModal;
