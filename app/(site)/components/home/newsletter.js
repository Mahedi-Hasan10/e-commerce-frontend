"use client";
import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#1B6392] p-5 public-sans ">
      <section className="max-w-[624px] border-2 text-center border-red-600 text-white mx-auto ">
        <h1 className="text-4xl font-semibold">Subscribe to our newsletter</h1>
        <p className="text-[1rem]">
          Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
          libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
        </p>
        <div className="mt-4 flex justify-center">
          <form class="relative">
            <form class="relative w-full max-w-lg">
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full px-4 py-2 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                class="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
