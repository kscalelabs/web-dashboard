const Spinner = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div role="status" {...props}>
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-foreground"></div>
    </div>
  );
};

export default Spinner;
