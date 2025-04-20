"use client";
import { useState } from "react";
import Image from "next/image";

export default function SolutionsAndServices() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Manufacturing",
      icon: (
        <Image
        className="inline-block mr-2"
        src="/boat-svgrepo-com.svg"
        width={40}
        height={40}
        alt="a"
      ></Image>
      ),
    },
    {
      id: "tab2",
      label: "Application Development and Management",
      icon: (
        <Image
                  className="inline-block mr-2"
                  src="/boat-svgrepo-com.svg"
                  width={40}
                  height={40}
                   alt="a"
                ></Image>
        
      ),
    },
    {
        id: "tab3",
        label: "Business Intelligence",
        icon: (
          <Image
                    className="inline-block mr-2"
                    src="/boat-svgrepo-com.svg"
                    width={40}
                    height={40}
                     alt="a"
                  ></Image>
          
        ),
      },
      {
        id: "tab4",
        label: "Customer Support",
        icon: (
          <Image
                    className="inline-block mr-2"
                    src="/boat-svgrepo-com.svg"
                    width={40}
                    height={40}
                     alt="a"
                  ></Image>
          
        ),
      },
  ];
  const tabContent = {
    tab1: (
      <div className="grid min-[940px]:grid-cols-2 grid-cols-1 mt-4 md:mt-8 m-10 items-center justify-center min-[940px]:items-center min-[940px]:justify-center">
        <div className="p-15">
          <h1 className="font-bold text-lg">Manufacturing activities under Production Management System.</h1>
          <p className="leading-5 mt-5">Production Management is to manage the process of converting inputs into the desired outputs in manufacturing.</p>
          <p className="my-5">The aim of production is to provide goods and services for mankind.</p>
          <p>
            <ul className="leading-loose">
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                  alt="Photo"
                ></Image>
               In right quantity.
              </li>
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                  alt="Photo"
                ></Image>
                At the appropriate place.
              </li>
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                   alt="a"
                ></Image>
                At the desired time.
              </li>
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                   alt="a"
                ></Image>
                With the required quantity.
              </li>
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                   alt="a"
                ></Image>
                At the reasonable cost.
              </li>
            </ul>
          </p>
        </div>
        <Image
          className="items-center justify-center"
          src="/manufacture.png" // If stored in the public folder
          alt="Example Image"
          width={600}
          height={600}
        />
      </div>
    ),
    tab2: (
        <div className="grid min-[940px]:grid-cols-2 grid-cols-1 mt-4 md:mt-8 m-10 items-center justify-center min-[940px]:items-center min-[940px]:justify-center">
        <div className="p-15">
          <h1 className="font-bold text-lg">Development of Import/Export Control System
          </h1>
          <p className="leading-5 mt-5">Developing services with Informatica products especially in Power Center , Cloud Data Integration , PC2IDMC.</p>
          <p>
            <ul className="leading-loose mt-5">
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                   alt="a"
                ></Image>
               Power Center
              </li>
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                   alt="a"
                ></Image>
               Cloud Data Integration
              </li>
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                   alt="a"
                ></Image>
               PC2IDMC
              </li>
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                   alt="a"
                ></Image>
               Cloud Application Integration
              </li>
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                   alt="a"
                ></Image>
               Data Integration Hub
              </li>
              <li>
                <Image
                  className="inline-block mr-2"
                  src="/square-check-svgrepo-com.svg"
                  width={20}
                  height={20}
                   alt="a"
                ></Image>
              Cloud Integration Hub
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
    tab3: (
      <div className="grid min-[940px]:grid-cols-2 grid-cols-1 mt-4 md:mt-8 m-10 items-center justify-center min-[940px]:items-center min-[940px]:justify-center">
      <div className="p-15">
        <h1 className="font-bold text-lg">Development of Import/Export Control System
        </h1>
        <p className="my-5">
        Automation the process of modernizing PowerCenter to Informatica's Cloud-Native IICS platform.
        </p>
        <p>
        Able to take full advantage of your new Cloud Data Warehouse faster, retire legacy workloads sooner, and lower risk than any other alternative.
        </p>
      </div>
      <Image
        src="/PC2IDMC.png" // If stored in the public folder
        alt="Example Image"
        width={600}
        height={600}
      />
    </div>
  ),
  tab4: (
    <div className="grid min-[940px]:grid-cols-2 grid-cols-1 mt-4 md:mt-8 m-10 items-center justify-center min-[940px]:items-center min-[940px]:justify-center">
    <div className="p-15">
      <h1 className="font-bold text-lg">Global Customer Support
      </h1>
      <p>
        <ul className="leading-loose">
          <li>
            <Image
              className="inline-block mr-2"
              src="/square-check-svgrepo-com.svg"
              width={20}
              height={20}
               alt="a"
            ></Image>
          Informatica Global Customer Support (GCS)
          </li>
          <li>
          GCS Team provide the service to the customers not only informatica (CDI,CAI) but also PWC and also PC2IDMC.
          </li>
          <li className="mt-5">
            <Image
              className="inline-block mr-2"
              src="/GCS.png"
              width={600}
              height={600}
               alt="a"
            ></Image>
            </li>
        </ul>
      </p>
    </div>
    <div className="p-15">
      <h1 className="font-bold text-lg">Local Customer Help-Desk
      </h1>
      <p>
        <ul className="leading-loose">
          <li>
            <Image
              className="inline-block mr-2"
              src="/square-check-svgrepo-com.svg"
              width={20}
              height={20}
               alt="a"
            ></Image>
          Production Management System
          </li>
          <li>
          We provide the production management system as the help-desk between End user and product owner.
          </li>
          <li className="mt-5">
            <Image
              className="inline-block mr-2"
              src="/LCS.png"
              width={600}
              height={600}
               alt="a"
            ></Image>
            </li>
        </ul>
      </p>
    </div>
  </div>
),
  };
  return (
    <div className="font font-Poppins  bg-[#ffff]  min-h-screen">
      <div className="flex flex-col items-center relative pt-10 pb-10 ">
        <div className="relative flex flex-col items-center mt-2 md:mt-4 mb-3 md:mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-stone-700">
            SOLUTIONS & SERVICES
          </h1>
          <div className="md:w-28 w-14 md:h-[4px] h-[2px] bg-[#0072bc] mt-1"></div>
          <div className="flex flex-row items-center gap-5 justify-center mt-5">
        <h5>How can we help you with your projects? Find out for yourself!</h5>
      </div>
        </div>
      </div>
     
      <div className="grid grid-cols-4 gap-4 m-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`border px-5 py-2 font-semibold ${
              activeTab === tab.id ? "bg-blue-500 text-white" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span className="max-[940px]:hidden">{tab.label}</span>
          </button>
        ))}
      </div>
      {tabContent[activeTab]}
    </div>
  );
}
