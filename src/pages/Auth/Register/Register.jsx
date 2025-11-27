import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigation } from "react-router";
import SocialLogin from "../Sociallogin/SocialLogin";
import axios, { Axios } from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigation()

  const { registerUser, updateUserProfile } = useAuth();

  const handleRegistration = (data) => {
    console.log("After Register", data);

   const profileImg = data.photo[0];

   registerUser(data.email, data.password)
     .then((result) => {
       console.log(result.user);

       const formData = new FormData();
       formData.append("image", profileImg);

       const imgAPI_URL = `https://api.imgbb.com/1/upload?key=${
         import.meta.env.VITE_image_host
       }`;

       axios
         .post(imgAPI_URL, formData)
         .then((res) => {
           console.log("after image upload", res.data.data.url);

           const userProfile = {
             displayName: data.name,
             photoURL: res.data.data.url,
           };
           updateUserProfile(userProfile)
           .then(()=> {
            console.log("user profile updated")
            navigate(location.state || "/");
           })
           .catch(error => {
            console.log(error);
           });

         })
         .catch((err) => {
           console.log("image upload failed", err);
         });
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
          {/* NAme field  */}
          <div>
            <label className="label font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter your Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">
                Name is required to register!
              </p>
            )}
          </div>

          {/* photo field  */}
          <div>
            <label className="label  text-gray-700"></label>
            <fieldset className="fieldset">
              <legend className="">Upload Photo</legend>
              <input
                type="file"
                className="file-input"
                {...register("photo", { required: true })}
              />
              <label className="label">Max size 2MB</label>
            </fieldset>
            {errors.photo?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Upload Your Photo.</p>
            )}
          </div>

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
        <p>
          Already Have an account?{" "}
          <Link to="/login" state={location.state} className="text-blue-400 underline">
            Login Now
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;
