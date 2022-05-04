import { useEffect, useState } from "react";
import "./App.css";
import CalenderHeader from "./CalenderHeader";
import Day from "./Day";
import DeleteEventModal from "./DeleteEventModal";
import NewEventModal from "./NewEventModal";
import useDate from "./useDate";

function App() {
  const [nav, setNav] = useState(0);
  const [click, setClick] = useState();
  const [events, setEvents] = useState(
    localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : []
  );
  const [days, dateDisplay] = useDate(events, nav);

  const eventForDay = (date) => events.find((e) => e.date === date);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <div className="App">
      <div className="container">
        <CalenderHeader
          dateDisplay={dateDisplay}
          onNext={() => setNav((nav) => nav + 1)}
          onBack={() => setNav((nav) => nav - 1)}
        />
        <div className="weekdays">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>

        <div className="calender">
          {days.map((day, idx) => (
            <Day
              key={idx}
              day={day}
              onClick={() => {
                if (day.value !== "padding") setClick(day.date);
              }}
            />
          ))}
        </div>
      </div>

      {click && !eventForDay(click) && (
        <NewEventModal
          onClose={() => setClick(null)}
          onSave={(title) => {
            setEvents([...events, { date: click, title }]);
            setClick(null);
          }}
        />
      )}
      {click && eventForDay(click) && (
        <DeleteEventModal
          eventText={eventForDay(click).title}
          onClose={() => setClick(null)}
          onDelete={() => {
            const newEventList = events.filter((e) => e.date !== click);
            setEvents(newEventList);
            setClick(null);
          }}
        />
      )}
    </div>
  );
}

export default App;
