import AuthBlock from "@/components/auth/AuthBlock";

const Signup = () => {
  return (
    <div className="mx-8">
      <div className="flex justify-center items-center">
        <AuthBlock
          title={<span className="text-foreground">Welcome!</span>}
          signup
        />
      </div>
    </div>
  );
};

export default Signup;
