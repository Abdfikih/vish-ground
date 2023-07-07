import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-partner-blue">
      <div className="transform hover:scale-105 transition-transform duration-500 ease-in-out bg-white p-8 rounded-lg shadow-2xl space-y-6 sm:p-16 sm:space-y-10">
        <div className="text-center space-y-6 animate-pulse">
          {/* <FontAwesomeIcon icon={faGhost} size="2xl" className="text-qiskit-blue-normal animate-bounce" /> */}

          <h1 className="text-6xl font-extrabold text-blue-500 animate-bounce">404</h1>
          <p className="text-xl font-semibold text-gray-700">Maaf, halaman yang Anda cari tidak ditemukan.</p>
        </div>
        <div className="flex justify-center">
          {/* <a
            href="/ "
            className="px-6 py-3 text-lg font-semibold text-center bg-qiskit-blue-lighter rounded-full text-white hover:bg-qiskit-blue-normal active:bg-blue-700 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Kembali ke Beranda
          </a> */}
        </div>
      </div>
    </div>
  );
}
