"use client";

import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation";

export default function loginpage() {

  const Swal = require('sweetalert2')
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "login failed");
      console.log("login successful:", json,);

      Swal.fire({
        title: 'Login Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'go to homepage'
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/");  // ✅ redirect to login page
        }
      });
    } catch (error) {
      console.error("login error:", error);
    }
  };

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/login.jpg')" }}
    >
      {/* Left side - Website Intro */}
      <div className="w-1/2 text-[black] flex flex-col   p-10">
        <h1 className="text-4xl font-bold mb-4">FurniFlex</h1>
        <p className="text-lg   ">
          Welcome to FurniFlex! <br />
          Your one-stop destination for <br /> premium furniture with style and comfort. <br />
          Sign up now to explore <br /> our exclusive collection and offers.
        </p>
      </div>

      {/* Right side - login Form */}
      <div className="w-1/2 flex justify-center items-center bg--100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 shadow-2xl rounded-2xl p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Login
          </h2>

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

          <button
            type="submit"
            className="w-full bg-[#3b5d50] text-white py-3 rounded-lg font-semibold hover:bg-[#3b5d50] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
