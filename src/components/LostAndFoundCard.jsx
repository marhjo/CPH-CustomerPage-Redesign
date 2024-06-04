import clsx from "clsx";

export default function LostAndFoundCard({ children, className }) {
  return (
    <div
      className={clsx(
        "flex flex-col shadow-cardMedium p-4 gap-3 justify-start items-center rounded-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
