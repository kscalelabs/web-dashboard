import React from "react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xs text-oxide mt-2">{children}</div>;
};

export default ErrorMessage;
