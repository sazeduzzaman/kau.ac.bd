"use client";
import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Card */}
      <div className="relative w-full max-w-md overflow-hidden border shadow-2xl bg-white/90 backdrop-blur-sm rounded-2xl border-white/20">
        <div className="px-8 pt-8 pb-4 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-800">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500">
            Enter your details to access your account
          </p>
        </div>

        <div className="p-8 pt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full py-3 pl-10 pr-4 border border-gray-200 rounded-lg outline-none focus:border-site-primary focus:ring-2 focus:ring-indigo-200 bg-white/50"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="flex justify-between mb-1 text-sm font-medium text-gray-700">
                Password
                <Link
                  href="#"
                  className="text-xs text-site-primary hover:text-indigo-800"
                >
                  Forgot password?
                </Link>
              </label>

              <div className="relative">
                <Lock className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full py-3 pl-10 pr-10 border border-gray-200 rounded-lg outline-none focus:border-site-primary focus:ring-2 focus:ring-indigo-200 bg-white/50"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-400 -translate-y-1/2 hover:text-gray-600 right-3 top-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button className="flex items-center justify-center w-full gap-2 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-site-primary hover:bg-indigo-700 group">
              Sign In
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Link to Register Page */}
          <div className="mt-6 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-site-primary hover:text-site-primary"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Blob Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
