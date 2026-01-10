// import Register from "@/components/AuthPage/Register/Register";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-2xl font-bold">Register</h1>
        <form action="/api/register" method="POST">
          {/* Form fields */}
        </form>
      </div>
    </div>
  );
};

export default Register;