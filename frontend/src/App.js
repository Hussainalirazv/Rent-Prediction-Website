import React from 'react';
import Navbar from './components/NavBar';
import RentForm from './components/RentForm';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24 px-4 sm:px-8">
        <section className="text-center py-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to <span className="text-blue-600">Rent-O-Meter</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Predict rental prices based on location, size, and amenities with AI.
          </p>
        </section>
        <section id="predict" className="bg-white shadow-md rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Make a Prediction</h3>
          <p className="text-gray-500"><RentForm/></p>
        </section>
      </main>
    </>
  );
}

export default App;
