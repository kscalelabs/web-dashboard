import { FaTimes } from "react-icons/fa";

import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string | React.ReactNode;
  label?: string;
  onClosed?: () => void;
  className?: string;
}

const Header = ({ title, label, onClosed, className }: HeaderProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center justify-center gap-y-4",
        className,
      )}
    >
      <h1 className="text-3xl font-semibold text-foreground py-4">{title}</h1>
      {label && <p className="text-foreground text-sm">{label}</p>}
      {onClosed && (
        <button
          onClick={onClosed}
          className="absolute top-0 right-0 p-4 text-foreground"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Header;
