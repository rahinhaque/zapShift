import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../Sociallogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    console.log("After Register", data);
    registerUser(data.email, data.password)
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
        Create an Account
      </h3>
      <p className="text-center text-secondary mb-6">Register to get started</p>

      {/* Card */}
      <form
        onSubmit={handleSubmit(handleRegistration)}
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
              <p className="text-red-500 text-sm mt-1">Email is required!</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              })}
              className="input input-bordered w-full rounded-lg"
              placeholder="Create a password"
            />

            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500 text-sm mt-1">
                Password must include letters and numbers
              </p>
            )}
          </div>

          {/* Forgot Password (same as login) */}
          <div className="flex justify-end">
            <a className="link text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary text-gray-700 w-full mt-2 rounded-lg">
            Login
          </button>
        </fieldset>
        <p>Already Have an account? <Link to="/login" className="text-blue-400 underline">Login Now</Link></p>
      <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
