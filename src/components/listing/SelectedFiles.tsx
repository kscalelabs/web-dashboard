import { X } from "lucide-react";

interface SelectedFilesProps {
  files: File[];
  onRemove: (index: number) => void;
}

export const SelectedFiles = ({ files, onRemove }: SelectedFilesProps) => {
  if (!files.length) return null;

  return (
    <div className="mt-2 border border-foreground rounded-lg p-2 bg-background">
      <div className="text-sm text-foreground mb-2">Selected files:</div>
      <div className="space-y-1">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-1 px-2 bg-background rounded"
          >
            <span className="truncate max-w-[180px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[600px] text-sm text-rust">
              {file.name}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(index);
              }}
              className="ml-2 p-1 hover:bg-rust rounded-full"
            >
              <X className="h-4 w-4 text-foreground hover:text-rust" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
