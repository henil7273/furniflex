"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

// ✅ Define types for your form fields
interface LoginFormData {
  email: string;
  password: string;
}

export default function Loginpage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>(); // 👈 Pass type here

  const [user, setUser] = useState<User | null>(null);

  // Function to fetch user explicitly
  const fetchUser = () => {
    const token = localStorage.getItem("token");
    if (!token) return setUser(null);

    fetch("/api/protected/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setUser(data.user || null))
      .catch(() => setUser(null));
  };

  // ✅ Explicitly type "data"
  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "login failed");

      // ✅ Save JWT in localStorage
      localStorage.setItem("token", json.token);

      Swal.fire({
        title: "Login Success!",
        text: "Do you want to continue",
        icon: "success",
        confirmButtonText: "Go to homepage",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/"); // middleware will check token
        }
      });
    } catch (error) {
      console.error("login error:", error);
    }
  };


  return (
    <div
      className="flex flex-col md:flex-row min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/login.jpg')" }}
    >
      {/* Left side - Website Intro */}
      <div className="w-full md:w-1/2 text-black flex flex-col p-6 md:p-10 bg-white/70 md:bg-transparent">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">FurniFlex</h1>
        <p className="text-base md:text-lg">
          Welcome to FurniFlex! <br />
          Your one-stop destination for <br /> premium furniture with style and
          comfort. <br />
          Sign up now to explore <br /> our exclusive collection and offers.
        </p>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100/90 shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-md"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-gray-800">
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
              className="border-b-2 p-3 w-full focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="border-b-2 p-3 w-full focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#3b5d50] text-white py-3 rounded-lg font-semibold hover:bg-[#3b5d50]/90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>

  );
}
