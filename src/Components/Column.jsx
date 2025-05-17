import { Draggable, Droppable } from '@hello-pangea/dnd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editmodal from './Editmodal';
import { NotePencil } from 'phosphor-react';
import {FlowerLotus} from 'phosphor-react'
import { Trash } from 'phosphor-react';
import { deletetask } from './taskslice';
function Column({ colkey, modal, edit }) {
  const task = useSelector(store => store.app.column[colkey]);
  const isdark = useSelector(store => store.app.isdark);
  const dispatch=useDispatch();
  function remove(id){
   dispatch(deletetask({colkey,taskid:id}))
  }
  return (
    <div
      className={`min-w-[250px] sm:w-64 rounded-lg shadow-md p-3 sm:p-4 mt-4 sm:mt-6 border
        ${
          isdark
            ? 'bg-gradient-to-b from-red-100 to-white border-red-300 text-gray-700'
            : 'bg-[#1a1a1a] border-gray-700 text-white'
        }
      `}
    >
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
       <FlowerLotus size={32} />
        <h2
          className={`text-base sm:text-lg font-semibold truncate ${
            isdark ? 'text-gray-700' : 'text-white'
          }`}
        >
          {colkey}
        </h2>
      </div>

      <Droppable droppableId={colkey}>
        {({ droppableProps, innerRef, placeholder }) => (
          <>
            <div
              ref={innerRef}
              {...droppableProps}
              className="flex flex-col gap-3"
            >
              {task.length === 0 ? (
                <div
                  className={`text-sm italic ${
                    isdark ? 'text-gray-500' : 'text-gray-400'
                  }`}
                >
                  No tasks available.
                </div>
              ) : (
                task.map((key, index) => (
                  <Draggable
                    key={key.id}
                    draggableId={key.id.toString()}
                    index={index}
                  >
                    {({ draggableProps, dragHandleProps, innerRef }) => (
                      <div
                        ref={innerRef}
                        {...draggableProps}
                        {...dragHandleProps}
                        className={`rounded-lg shadow-sm px-3 py-2 sm:px-4 sm:py-3 hover:shadow-md transition duration-200 border
                          ${
                            isdark
                              ? 'bg-white border-gray-300 text-gray-800'
                              : 'bg-[#292929] border-gray-600 text-white'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <p className="text-sm sm:text-base font-semibold truncate">
                            {key.tasktitle}
                          </p>
                          <button
                            onClick={() => modal(key)}
                            className={`ml-auto focus:outline-none transition-colors duration-200 ${
                              isdark
                                ? 'text-gray-500 hover:text-pink-500'
                                : 'text-gray-300 hover:text-pink-400'
                            }`}
                            aria-label="Edit Task"
                            title="Edit Task"
                          >
                            <NotePencil size={20} weight="bold" />
                          </button>
                          <button onClick={()=>{remove(key.id)}}
                            className={`focus:outline-none transition-colors duration-200 ${
                              isdark
                                ? 'text-gray-500 hover:text-pink-500'
                                : 'text-gray-300 hover:text-pink-400'
                            }`}
                            aria-label="Delete Task"
                            title="Delete Task"
                            ><Trash size={20} weight="bold" /></button>
                        </div>
                        <p
                          className={`text-xs sm:text-sm ${
                            isdark ? 'text-gray-600' : 'text-gray-400'
                          }`}
                        >
                          {key.description}
                        </p>
                      </div>
                    )}
                  </Draggable>
                ))
              )}
              {placeholder}
            </div>
          </>
        )}
      </Droppable>
      {edit && <Editmodal editkey={edit} modal={modal} col={colkey} />}
    </div>
  );
}

export default Column;
