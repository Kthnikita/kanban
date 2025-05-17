import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Addcolumn from './Addcolumn';
import Column from './Column';
import { DragDropContext } from '@hello-pangea/dnd';
import { handeldragend } from './taskslice';

function Dashboard() {
  const dispatch = useDispatch();
  const theme = useSelector(store => store.app.isdark); 
  const cols = useSelector(state => state.app.column);
  const colval = Object.keys(cols);
  const [edit, setEditTask] = useState(null);

  function handeldrop(result) {
    console.log(result);
    dispatch(handeldragend(result));
  }

  function handleModal(task = null) {
    setEditTask(task); 
  }

  return (
    <div className={`w-full h-full overflow-x-auto ${theme ? 'bg-[#F5ECE0] text-black' : 'bg-[#1a1a1a] text-white'}`}>
      <div className="flex gap-6 sm:gap-10 px-4 sm:px-10 py-4 min-w-max">
        <DragDropContext onDragEnd={handeldrop}>
          {colval.map(e => (
            <Column colkey={e} key={e} modal={handleModal} edit={edit} />
          ))}
        </DragDropContext>
        <Addcolumn />
      </div>
    </div>
  );
}

export default Dashboard;
