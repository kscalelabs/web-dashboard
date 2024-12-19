import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  // Add wheel event handler to prevent scroll adjusting number inputs
  const handleWheel = (e: React.WheelEvent<HTMLInputElement>) => {
    if (type === "number") {
      e.currentTarget.blur();
    }
  };

  return (
    <input
      type={type}
      onWheel={handleWheel}
      className={cn(
        `flex h-10 w-full rounded-md
        border border-plasma px-3 py-2 text-sm
        ring-offset-foreground file:border-0 bg-background
        file:text-sm file:font-medium
        placeholder:text-foreground
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
        focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50
        focus:border-plasma focus:ring focus:ring-foreground focus:ring-opacity-50
        text-foreground cursor-selector`,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        `flex w-full rounded-md border border-plasma px-3 py-2 text-sm
        ring-offset-plasma file:border-0 bg-background
        file:text-sm file:font-medium placeholder:text-foreground
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-ring
        disabled:cursor-not-allowed disabled:opacity-50
        text-foreground cursor-selector`,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
TextArea.displayName = "TextArea";

export { Input, TextArea };
