import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edittask } from './taskslice';

function Editmodal({ editkey, modal, col }) {
  const theme = useSelector(store => store.app.isdark); 

  const [tasktitle, setTaskTitle] = useState(editkey.tasktitle || "");
  const [description, setDescription] = useState(editkey.description || "");
 

  const dispatch = useDispatch();

  function handleTask() {
    dispatch(edittask({ task: { tasktitle, description, id: editkey.id }, col }));
    modal(null);
  }

  return (
    <div
      className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/30 backdrop-blur-sm"
      onClick={modal}
    >
      <div
        className={`w-[400px] rounded-xl shadow-xl p-6 relative
          ${theme 
            ? 'bg-gradient-to-br from-pink-100 to-[#FAD0C4] text-gray-800'  
            : 'bg-gradient-to-br from-gray-800 to-gray-900 text-white'      
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`absolute top-3 right-4 text-xl hover:scale-110 transition-transform
            ${theme ? 'text-gray-800' : 'text-white'}`}
          onClick={() => { modal(null) }}
        >
          ❌
        </button>
        <h2 className={`text-xl font-semibold text-center mb-5 ${theme ? '' : 'text-white'}`}>
          Edit Task
        </h2>
        <div className="mb-4">
          <label className={`block text-sm font-medium mb-1 ${theme ? 'text-gray-700' : 'text-gray-300'}`}>Title</label>
          <input
            type="text"
            value={tasktitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
              ${theme 
                ? 'border-gray-300 focus:ring-pink-300 text-black bg-white' 
                : 'border-gray-600 focus:ring-pink-500 bg-gray-700 text-white'
              }`}
          />
        </div>
        <div className="mb-4">
          <label className={`block text-sm font-medium mb-1 ${theme ? 'text-gray-700' : 'text-gray-300'}`}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            className={`w-full px-4 py-2 border rounded-lg resize-none h-24 focus:outline-none focus:ring-2
              ${theme 
                ? 'border-gray-300 focus:ring-pink-300 text-black bg-white' 
                : 'border-gray-600 focus:ring-pink-500 bg-gray-700 text-white'
              }`}
          />
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
            + Edit Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default Editmodal;
