import React, { useState } from 'react';
import { addcolumn } from './taskslice';
import { useDispatch, useSelector } from 'react-redux';

function Addcolumnmodal({ open }) {
  const dispatch = useDispatch();
  const theme = useSelector(store => store.app.isdark);
  const [input, setInput] = useState('');

  function handleAdd() {
    if (!input.trim()) return;
    dispatch(addcolumn(input.trim()));
    open();
  }

  return (
    <div
      className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/30 backdrop-blur-sm"
      onClick={open}
    >
      <div
        className={`w-[400px] rounded-xl shadow-xl p-6 relative 
          ${theme 
            ? 'bg-gradient-to-br from-pink-100 to-[#FAD0C4] text-gray-800' 
            : 'bg-gradient-to-br from-gray-800 to-gray-900 text-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`absolute top-2 right-3 text-lg hover:scale-110 transition-transform 
            ${theme ? 'text-gray-800' : 'text-white'}`}
          onClick={open}
        >
          ❌
        </button>

        <h2 className={`text-xl font-semibold text-center mb-4 ${theme ? '' : 'text-white'}`}>
          Add New Column
        </h2>

        <label className={`block mb-2 text-sm font-medium ${theme ? 'text-gray-700' : 'text-white'}`}>
          Column Title
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter column title"
          className={`w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300
            ${theme 
              ? 'border-gray-300 text-gray-900 bg-white' 
              : 'border-gray-600 bg-gray-800 text-white placeholder-gray-400'}`}
        />

        <div className="flex justify-center">
          <button
            disabled={!input.trim()}
            onClick={handleAdd}
            className={`px-6 py-2 rounded-lg shadow-md transition duration-200 text-white
              ${!input.trim() 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-pink-500 hover:bg-pink-600'}`}
          >
            + Add Column
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addcolumnmodal;
