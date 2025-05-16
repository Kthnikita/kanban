import React, { useState } from 'react';
import Addcolumnmodal from './Addcolumnmodal';
import { useSelector } from 'react-redux';

function Addcolumn() {
  const [isopen, setopen] = useState(false);
  const isdark = useSelector(store => store.app.isdark); 

  function handelmodal() {
    setopen(!isopen);
  }

  return (
    <>
      <div
        className={`min-w-56 h-[calc(100vh-100px)] flex justify-center items-center mt-6 rounded-lg cursor-pointer
          ${
            !isdark
              ? 'bg-gradient-to-b from-[#3C3D37] to-[#697565] text-white'
              : 'bg-gradient-to-b from-red-200 to-white text-gray-800'
          }
        `}
        onClick={handelmodal}
      >
        +add column
        {isopen && <Addcolumnmodal open={handelmodal} />}
      </div>
    </>
  );
}

export default Addcolumn;
