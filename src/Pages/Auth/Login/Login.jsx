import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (data) => {
    console.log("form data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <h2 className="text-center text-2xl font-bold">Welcome Back</h2>
      <h4 className="text-center">Login Local Chef Bazaar</h4>
      <div>
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <fieldset className="fieldset">
              {/* email field */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.types === "required" && (
                <p className="text-red-500 font-bold">Email is required</p>
              )}
              {/* password field */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true, minLength: 6 })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.types === "required" && (
                <p className="text-red-500 font-bold">Password is required</p>
              )}

              {errors.password?.types === "minLength" && (
                <p className="text-red-500 font-bold">
                  Password must be 6 character or longer
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>
              New to Local Chef Bazaar?{" "}
              <Link
                state={location.state}
                className="text-blue-600 underline"
                to="/register"
              >
                Register
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
