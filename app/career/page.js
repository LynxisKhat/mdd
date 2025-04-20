"use client";

import { useState } from "react";
export default function Career() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Button to open modal */}
      <button
        className="py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold">Modal Title</h2>
            <p className="mt-2 text-gray-600">This is a simple modal using Tailwind CSS.</p>
            <div className="mt-4 flex justify-end">
              <button
                className="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}