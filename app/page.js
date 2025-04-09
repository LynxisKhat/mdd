// // pages/index.js
// 'use client';

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import clsx from "clsx";

// const images = [
//   { src: "/images/1.png", caption: "Team bonding day at the park" },
//   { src: "/images/2.jpg", caption: "Team bonding day at the park" },
//   { src: "/images/3.jpg", caption: "Team bonding day at the park" },
//   { src: "/images/7.jpg", caption: "Team bonding day at the park" },
//   { src: "/images/9.jpg", caption: "Team bonding day at the park" },
//   { src: "/images/10.jpg", caption: "Team bonding day at the park" },
//   { src: "/images/12.jpg", caption: "Team bonding day at the park" },
//   { src: "/images/13.jpg", caption: "Team bonding day at the park" },
//   { src: "/images/14.jpeg", caption: "Team bonding day at the park" },
// ];

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white flex flex-col">
//       <main className="container mx-auto py-12 px-4 text-center">
//         {/* <h2 className="text-4xl font-bold mb-4">Welcome to Our Company</h2>
//         <p className="text-lg text-gray-700 mb-6">
//           We build digital solutions that make businesses shine.
//         </p> */}
//         <div className="w-full max-w-5xl mx-auto aspect-[5/3] rounded-2xl overflow-hidden shadow-lg relative">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={clsx(
//                 "absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out",
//                 index === currentIndex ? "translate-x-0 z-20" : "translate-x-full z-10"
//               )}
//             >
//               <Image
//                 src={image.src}
//                 alt="Group Photo"
//                 fill
//                 className="object-cover"
//               />
//               <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-2 px-4 text-sm text-left animate-fade-in">
//                 {image.caption}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-8">
//           <Button className="text-lg px-6 py-3">Contact Us</Button>
//         </div>
//       </main>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/1.png',
  '/images/2.jpg',
  '/images/3.jpg',
  '/images/13.jpg',
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full  overflow-hidden relative">
      {/* Mobile: only show first image */}
      <div className="block md:hidden aspect-[5/3] w-full h-full  relative">
        <Image
          src={images[3]}
          alt="Mobile image"
          fill
          className="object-cover"
        />
      </div>

      {/* Desktop: show slideshow */}
      <div className=" hidden  aspect-[5/3] gitmd:block w-screen h-screen overflow-hidden relative ">
        {images.map((img, index) => (
          <Image
            key={img}
            src={img}
            alt={`Slide ${index}`}
            fill
            className={`transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
