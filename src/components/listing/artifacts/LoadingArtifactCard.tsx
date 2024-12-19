import React from "react";

const LoadingArtifactCard: React.FC = () => {
  return (
    <div className="bg-foreground shadow-md rounded-lg overflow-hidden h-full flex flex-col">
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <div className="h-6 bg-foreground rounded w-3/4 animate-pulse"></div>
        </div>
        <div className="mb-2 h-40 bg-foreground rounded animate-pulse"></div>
        <div className="h-4 bg-foreground rounded w-1/2 animate-pulse mt-2"></div>
      </div>
      <div className="bg-foreground px-4 py-2">
        <div className="h-4 bg-foreground rounded w-1/3 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingArtifactCard;
