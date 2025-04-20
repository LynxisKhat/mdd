"use client";
import { useState } from "react";
export default function Event() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="font font-Poppins  bg-[#ffff]  min-h-screen">
      <div className="flex flex-col items-center relative pt-10 pb-10 ">
        <div className="relative flex flex-col items-center mt-2 md:mt-4 mb-3 md:mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-stone-700">
            Our Events
          </h1>

          <div className="md:w-28 w-14 md:h-[4px] h-[2px] bg-[#0072bc] mt-1"></div>
          <p className="mt-10 sm:text-1xl text-2xl items-center sm:items-center m-10">
            Discover our Nurturing the next generation, Environment caring and
            Social contribution.
          </p>
        </div>
      </div>
      <div className="grid items-center justify-center sm:grid-cols-3 grid-cols-1 gap-4 p-4 min-h-screen bg-slate-1000 dark:bg-slate-900 ">
        <div
          href="#"
          className=" group relative block bg-black rounded-lg overflow-hidden"
        >
          <img
            alt=""
            src="/4.jpg"
            className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-[#0072BC] uppercase">
              NTTDataMyanmar
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              New Year Present 2024
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white font-bold">07 Feb 2024</p>
                <button
                  className="px-1 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                  onClick={() => document.getElementById("myModal")?.classList.remove("hidden")}
                >
                  Read Me More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          href="#"
          className="group relative block bg-black rounded-lg overflow-hidden"
        >
          <img
            alt=""
            src="/2.jpg"
            className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-[#0072BC] uppercase">
              NTTDATAMYANMAR
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Annual Event 2023
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white font-bold">16 Jan 2024</p>
                <button
                  className="px-1 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                  onClick={() => document.getElementById("myModal")?.classList.remove("hidden")}
                >
                  Read Me More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          href="#"
          className="group relative block bg-black rounded-lg overflow-hidden"
        >
          <img
            alt=""
            src="DSC_0086.jpeg"
            className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-[#0072BC] uppercase">
              NTTDATAMYANMAR
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Timeout Activity
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white font-bold">07 Jul 2023</p>

                <button
                  className="px-1 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                  onClick={() => document.getElementById("myModal")?.classList.remove("hidden")}
                >
                  Read Me More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          href="#"
          className="group relative block bg-black rounded-lg overflow-hidden"
        >
          <img
            alt=""
            src="/Dev 1 Group.jpg"
            className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-[#0072BC] uppercase">
              NTTDATAMYANMAR
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              International Women's Day
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white font-bold">09 Mar 2023</p>
                <button
                  className="px-1 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                  onClick={() => document.getElementById("myModal")?.classList.remove("hidden")}
                >
                  Read Me More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          href="#"
          className="group relative block bg-black rounded-lg overflow-hidden"
        >
          <img
            alt=""
            src="/all 2 TC.jpg"
            className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-[#0072BC] uppercase">
              NTTDATAMYANMAR
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Annual Event, Nov 2022
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white font-bold">19 Dec 2022</p>
                <button
                  className="px-1 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                  onClick={() => document.getElementById("myModal")?.classList.remove("hidden")}
                >
                  Read Me More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          href="#"
          className="group relative block bg-black rounded-lg overflow-hidden"
        >
          <img
            alt=""
            src="/Gp 10.jpg"
            className="absolute inset-0 h-full w-full rounded-lg object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium tracking-widest text-[#0072BC] uppercase">
              NTTDATAMYANMAR
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Annual Staff Dinner
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white font-bold">19 Dec 2022</p>
                <button
                  className="px-1 py-2 text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                  onClick={() => document.getElementById("myModal")?.classList.remove("hidden")}
                >
                  Read Me More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="myModal" className="hidden fixed inset-0 flex items-center justify-center top-8 bg-black/50 min-h-screen z-10 w-screen">
  <div className="bg-white p-6 rounded-lg shadow-lg w-300 max-h-[85vh] flex flex-col">
    
    {/* Fixed Header */}
    <div className="sticky top-0 bg-white p-2 border-b">
      <h2 className="text-lg font-semibold">Centered Modal</h2>
    </div>

    {/* Scrollable Content */}
    <div className="overflow-y-auto flex-grow p-4">
      <p className="text-gray-600">This modal opens using its ID.</p>
      <p className="text-gray-600">This modal opens using its ID.</p>
      <p className="text-gray-600">This modal opens using its ID.</p>
      <p className="text-gray-600">This modal opens using its ID.</p>

      {/* Image Row */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <img src="/2.jpg" alt="Image 1" className="rounded-lg" />
        <img src="/2.jpg" alt="Image 2" className="rounded-lg" />
        <img src="/2.jpg" alt="Image 3" className="rounded-lg" />
      </div>
    </div>

    {/* Fixed Footer */}
    <div className="sticky bottom-0 bg-white p-1 border-t flex justify-end">
      <button
        className="py-1 mt-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400 "
        onClick={() => document.getElementById("myModal")?.classList.add("hidden")}
      >
        Close
      </button>
    </div>
  </div>
</div>
      </div>
      <div className="flex justify-center space-x-2 m-10">
        <a
          href="#"
          className="ring ring-primary bg-primary/20 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
        >
          1
        </a>
        <a
          href="#"
          className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
        >
          2
        </a>
        <a
          href="#"
          className="hover:bg-gray-100 px-2 py-1 sm:px-4 sm:py-2 ml-1 mt-2 text-gray-600 border rounded-lg focus:outline-none"
        >
          3
        </a>
        <span className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 rounded-lg focus:outline-none">
          ...
        </span>
        <a
          href="#"
          className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          21
        </a>

        <a
          href="#"
          className="px-2 py-1 sm:px-4 sm:py-2 mt-2 text-gray-600 border rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
