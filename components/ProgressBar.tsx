interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({
  current,
  total,
}: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <div className="mb-12">

      <div className="mb-3 flex items-center justify-between">

        <span className="text-sm font-medium tracking-[0.2em] text-[#4B6584]">
          PROGRESS
        </span>

        <span className="text-sm text-gray-500">
          {current} / {total}
        </span>

      </div>

      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-gradient-to-r from-[#14213D] to-[#1B2A49] transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}