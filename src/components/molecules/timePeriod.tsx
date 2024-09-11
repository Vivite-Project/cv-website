import clsx from 'clsx';

interface TimePeriodProps {
  className?: string;
  period: {
    start: { datetime: string; text: string };
    end: { datetime: string; text: string };
  };
}

const TimePeriod: React.FC<TimePeriodProps> = ({ className, period }) => {
  return (
    <div
      className={clsx(
        className,
        'flex items-center gap-1 md:flex-col md:items-start md:gap-0'
      )}
    >
      <span
        aria-hidden="true"
        className="mr-3 h-4 w-0.5 bg-zinc-500 md:hidden"
      />
      <time className="text-sm text-zinc-500" dateTime={period.start.datetime}>
        {period.start.text}
      </time>
      <div className="flex gap-1">
        <span className="text-sm text-zinc-500">to</span>
        <time className="text-sm text-zinc-500" dateTime={period.end.datetime}>
          {period.end.text}
        </time>
      </div>
    </div>
  );
};

export default TimePeriod;
