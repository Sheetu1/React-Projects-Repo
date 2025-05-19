import React, { useState } from 'react';

const App = () => {
  const [count, setcount] = useState(0);

  function incHandler() {
    setcount(count + 1);
  }

  function decHandler() {
    setcount(count - 1);
  }

  function resetHandler() {
    setcount(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Increment & Decrement</h1>

        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            onClick={incHandler}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-xl"
          >
            +
          </button>

          <span className="text-3xl font-semibold text-gray-700">{count}</span>

          <button
            onClick={decHandler}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-xl"
          >
            -
          </button>
        </div>

        <button
          onClick={resetHandler}
          className="mt-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-full transition-all"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
