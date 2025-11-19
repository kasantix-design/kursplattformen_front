import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours, parseISO } from "date-fns";

// 🔥 Viktig: ESM-import, IKKE require()
import moment from "moment";

const localizer = momentLocalizer(moment);

type EventType = {
  title: string;
  start: Date;
  end: Date;
  link?: string;
};

const initialEvents: EventType[] = [
  {
    title: "Undervisning med gruppe A",
    start: new Date(2025, 10, 25, 18, 0),
    end: new Date(2025, 10, 25, 19, 0),
    link: "/undervisning"
  },
  {
    title: "Videomøte med medlemmer",
    start: new Date(2025, 10, 28, 13, 0),
    end: new Date(2025, 10, 28, 14, 0),
    link: "/videomote"
  }
];

export default function Kalender() {
  const [events, setEvents] = useState<EventType[]>(initialEvents);
  const bruker = JSON.parse(localStorage.getItem("bruker") || "{}");

  const handleSelectSlot = ({ start, end }: any) => {
    if (bruker?.role !== "admin") return;

    const title = window.prompt("Tittel på møte eller undervisning?");
    const link = window.prompt("Lenke (f.eks. /videomote eller /undervisning)?");

    if (title && link) {
      setEvents([...events, { title, start, end, link }]);
    }
  };

  const handleSelectEvent = (event: EventType) => {
    if (event.link) {
      const go = window.confirm(`Gå til: ${event.title}?`);
      if (go) window.location.href = event.link;
    }
  };

  return (
    <div className="content-area">
      <h1>Kalender</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable={bruker?.role === "admin"}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        style={{ height: 600 }}
      />
    </div>
  );
}
