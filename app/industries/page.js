"use client";
import { useState } from "react";
import Image from "next/image";

export default function Industries() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Banking & Financial",
      icon: (
        <Image
        class="inline-block mr-2"
        src="/boat-svgrepo-com.svg"
        width={40}
        height={40}
      ></Image>
      ),
    },
    {
      id: "tab2",
      label: "Trading(Import/Export)",
      icon: (
        <Image
                  class="inline-block mr-2"
                  src="/boat-svgrepo-com.svg"
                  width={40}
                  height={40}
                ></Image>
        
      ),
    },
  ];
  const tabContent = {
    tab1: (
      <div class="grid md:grid-cols-2 grid-cols-1 mt-4 md:mt-8 m-10 justify-items-center">
        <div class="p-15">
          <h1 class="font-bold text-lg">Financial Network System</h1>
          <p>
            <ul class="leading-loose">
              <li>
                <Image
                  class="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                ></Image>
                System development and IT training service for financial
                institution by applying long term experience in Japan
              </li>
              <li>
                <Image
                  class="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                ></Image>
                Maintenance and operation services after system development also
                can be supported
              </li>
              <li>
                <Image
                  class="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                ></Image>
                The system provide functions including fund settlement,
                government bond settlement and collateral management.
              </li>
            </ul>
          </p>
        </div>
        <Image
          src="/Banking_tab.png" // If stored in the public folder
          alt="Example Image"
          width={600}
          height={600}
        />
      </div>
    ),
    tab2: (
        <div class="grid md:grid-cols-2 grid-cols-1 mt-4 md:mt-8 m-10 justify-items-center">
        <div class="p-15">
          <h1 class="font-bold text-lg">Development of Import/Export Control System
          </h1>
          <p>
            <ul class="leading-loose">
              <li>
                <Image
                  class="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                ></Image>
               In this service area, all of the SD process of analyzing, designing, implementing, and testing and IT infrastructure development are being operated with our valuable experience.
              </li>
            </ul>
          </p>
        </div>
        <Image
          src="/Trading.png" // If stored in the public folder
          alt="Example Image"
          width={600}
          height={600}
        />
      </div>
    ),
  };
  return (
    <div class="font font-Poppins  bg-[#ffff]  min-h-screen">
      <div class="flex flex-col items-center relative pt-10 pb-10 ">
        <div class="relative flex flex-col items-center mt-2 md:mt-4 mb-3 md:mb-6">
          <h1 class="text-2xl md:text-3xl lg:text-5xl font-semibold text-stone-700">
            Industries
          </h1>
          <div class="md:w-28 w-14 md:h-[4px] h-[2px] bg-[#0072bc] mt-1"></div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-5 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`border px-30 py-2 font-semibold ${
              activeTab === tab.id ? "bg-blue-500 text-white" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span class="max-md:hidden">{tab.label}</span>
          </button>
        ))}
      </div>
      {tabContent[activeTab]}
    </div>
  );
}
