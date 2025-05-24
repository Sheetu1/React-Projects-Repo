import React from 'react';
import Testimonials from './Components/Testimonials';
import reviews from "./Data";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 px-4">
      <h1 className="text-4xl font-bold mb-6 relative">
        Our <span className="text-black">Testimonials</span>
        <span className="absolute left-1/2 bottom-0 w-32 h-1 bg-purple-400 -translate-x-1/2 translate-y-1 rounded-full"></span>
      </h1>

      <Testimonials reviews={reviews} />
    </div>
  );
};

export default App;
