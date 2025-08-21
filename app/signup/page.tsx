"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";


export default function SignupPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const Swal = require('sweetalert2')
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      setServerError(null);
      setSuccess(null);

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Signup failed");

      Swal.fire({
        title: 'Signup Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Login now !'
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");  // ✅ redirect to login page
        }
      });
    } catch (e: any) {
      setServerError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/signup.jpg')" }}
    >
      {/* Left side */}
      <div className="w-1/2 text-[black] flex flex-col text-right p-10">
        <h1 className="text-4xl font-bold mb-4">FurniFlex</h1>
        <p className="text-lg text-right">
          Welcome to FurniFlex! <br />
          Your one-stop destination for premium furniture.
        </p>
      </div>

      {/* Right side - Signup Form */}
      <div className="w-1/2 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Create Account</h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "First name is required" })}
                className=" border-b-2  p-3 w-full focus:outline-none "
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className=" border-b-2  p-3 w-full focus:outline-none "
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
              className=" border-b-2  p-3 w-full focus:outline-none "
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              className=" border-b-2  p-3 w-full focus:outline-none "
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>


          {serverError && <p className="text-red-600 text-sm mb-3">{serverError}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#3b5d50] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
