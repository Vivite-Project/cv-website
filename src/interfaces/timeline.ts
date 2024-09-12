import Link from "@interfaces/link";

interface Event {
  id: number;
  title: string;
  text: string;
  link: Link;
  end: Date;
  start: Date;
}

interface Timeline {
  id: number;
  events: Event[];
}

export default Timeline;
