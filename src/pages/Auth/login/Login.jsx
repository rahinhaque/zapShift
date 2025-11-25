import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../Sociallogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full">
      {/* Title */}
      <h3 className="text-3xl font-bold text-primary text-center mb-2">
        Welcome Back
      </h3>
      <p className="text-center text-secondary mb-6">Please login to continue</p>

      {/* Card */}
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white shadow-md rounded-xl p-8 space-y-4 border border-gray-100"
      >
        <fieldset className="fieldset space-y-4">
          {/* Email */}
          <div>
            <label className="label font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter your email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">
                Please insert your email address
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter your password"
            />
            {errors.password?.type === "requierd" && (
              <p className="text-red-500 text-sm mt-1">Incorrect password</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a className="link text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary text-gray-500 w-full mt-2 rounded-lg">
            Login
          </button>
        </fieldset>
        <p>New To zapShift? <Link to="/register" className="text-blue-400 underline">Register Now</Link></p>
      <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Login;
