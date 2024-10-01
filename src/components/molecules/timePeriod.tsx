import clsx from "clsx";
import moment from "moment";

interface TimePeriodProps {
  className?: string;
  end: string;
  start: string;
}

const TimePeriod: React.FC<TimePeriodProps> = ({ className, end, start }) => {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-1 md:flex-col md:items-start md:gap-0"
      )}
    >
      <span
        aria-hidden="true"
        className="mr-3 h-4 w-0.5 bg-zinc-500 md:hidden"
      />
      <time
        className="text-sm text-zinc-500"
        dateTime={moment(start).format("YYYY-MM")}
      >
        {moment(start).format("MMMM YYYY")}
      </time>
      <div className="flex gap-1">
        <span className="text-sm text-zinc-500">to</span>
        <time
          className="text-sm text-zinc-500"
          dateTime={moment(end).format("YYYY-MM")}
        >
          {moment(end).format("MMMM YYYY")}
        </time>
      </div>
    </div>
  );
};

export default TimePeriod;
