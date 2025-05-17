import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtask } from './taskslice';

function Addtaskmodal({ toggel }) {
  const cols = useSelector(store => store.app.column);
  const col = Object.keys(cols);
  const initial = col.length === 0 ? '' : col[0];
  const theme = useSelector(store => store.app.isdark); 

  const [tasktitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [column, setColumn] = useState(initial);

  const dispatch = useDispatch();

  function handleTask() {
    if (!tasktitle.trim()) return;
    dispatch(addtask({ tasktitle: tasktitle.trim(), description: description.trim(), column, id: Date.now() }));
    toggel();
  }

  return (
    <div
      className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/30 backdrop-blur-sm"
      onClick={toggel}
    >
      <div
        className={`w-[400px] rounded-xl shadow-xl p-6 relative 
          ${theme
            ? 'bg-gradient-to-br from-pink-100 to-[#FAD0C4] text-gray-800'
            : 'bg-gradient-to-br from-[#3C3D37] to-[#697565] text-white'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`absolute top-3 right-4 text-xl hover:scale-110 transition-transform 
            ${theme ? 'text-gray-800' : 'text-white'}`}
          onClick={toggel}
        >
          ❌
        </button>
        <h2 className={`text-xl font-semibold text-center mb-5 ${theme ? '' : 'text-white'}`}>
          Add New Task
        </h2>
        <div className="mb-4">
          <label className={`block text-sm font-medium mb-1 ${theme ? 'text-gray-800' : 'text-gray-300'}`}>
            Title
          </label>
          <input
            type="text"
            value={tasktitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
              ${theme
                ? 'border-gray-300 focus:ring-pink-300 text-gray-900 bg-white'
                : 'border-gray-600 focus:ring-pink-300 bg-gray-700 text-white'
              }`}
          />
        </div>
        <div className="mb-4">
          <label className={`block text-sm font-medium mb-1 ${theme ? 'text-gray-800' : 'text-gray-300'}`}>
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            className={`w-full px-4 py-2 border rounded-lg resize-none h-24 focus:outline-none focus:ring-2
              ${theme
                ? 'border-gray-300 focus:ring-pink-300 text-gray-900 bg-white'
                : 'border-gray-600 focus:ring-pink-300 bg-gray-700 text-white'
              }`}
          />
        </div>
        <div className="mb-6">
          <label className={`block text-sm font-medium mb-1 ${theme ? 'text-gray-800' : 'text-gray-300'}`}>
            Assign to Column
          </label>
          <select
            value={column}
            onChange={(e) => setColumn(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
              ${theme
                ? 'border-gray-300 focus:ring-pink-300 text-gray-900 bg-white'
                : 'border-gray-600 focus:ring-pink-300 bg-gray-700 text-white'
              }`}
          >
            {col.map((item, index) => (
              <option key={index} value={item} className={theme ? '' : 'bg-gray-700 text-white'}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          <button
            disabled={!tasktitle.trim()}
            onClick={handleTask}
            className={`text-white px-6 py-2 rounded-lg shadow-md transition duration-200
              ${!tasktitle.trim()
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-pink-500 hover:bg-pink-600'}`}
          >
            + Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtaskmodal;
