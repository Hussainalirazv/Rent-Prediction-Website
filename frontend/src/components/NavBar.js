import React from 'react';

export default function Navbar() {
  const handlePredictClick = () => {
    const predictSection = document.getElementById('predict');
    if (predictSection) {
      predictSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
          Rent<span className="text-gray-800">-O-Meter</span>
        </h1>
        <button
          onClick={handlePredictClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition duration-200 font-medium"
        >
          Predict
        </button>
      </div>
    </nav>
  );
}
