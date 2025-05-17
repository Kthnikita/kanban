import React, { useState } from 'react';
import Addtaskmodal from './Addtaskmodal';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from 'phosphor-react';
import { handeltheme } from './taskslice';
import { useEffect } from 'react';
function Navbar() {
  const [taskmodal, settaskmodal] = useState(false);
  const theme=useSelector(store=>store.app.isdark)
  const check = useSelector(store => store.app);
  const isDisabled = !check.column || Object.keys(check.column).length === 0;
  const [darkMode, setDarkMode] = useState(theme); 
  const dispatch=useDispatch();
  useEffect(() => {
    setDarkMode(theme);
  }, [theme]);

  function toggel() {
    settaskmodal(!taskmodal);
  }

  function handleThemeToggle(checked) {
    setDarkMode(checked);
    dispatch(handeltheme(checked));
  }

  return (
    <div className={`flex h-20 w-auto items-center gap-2 px-10 sticky top-0 z-30  ${darkMode?'bg-white dark:bg-gray-900  text-black dark:text-white':'bg-[#222222] dark:bg-gray-900  text-white dark:text-black'}`}>
      {taskmodal && <Addtaskmodal toggel={toggel} />}
      <div className='flex gap-1'>
        <div className='h-8 w-2 rounded-sm bg-[#C599B6] border border-white'></div>
        <div className='h-8 w-2 rounded-sm bg-[#E6B2BA] border border-white'></div>
        <div className='h-8 w-2 rounded-sm bg-[#FAD0C4] border border-white'></div>
      </div>

      <h2 className='text-2xl font-bold'>Kanban</h2>

      <div className='flex ml-auto gap-4 items-center'>
        
        <div className="flex items-center gap-2">
          <Moon size={20} weight="fill" className={darkMode ? 'text-gray-400' : 'text-black-600'} />
          <Switch
            id="theme-mode"
            checked={darkMode}
            onCheckedChange={handleThemeToggle}
          />
          <Sun size={20} weight="fill" className={darkMode ? 'text-yellow-400' : 'text-gray-400'} />
        </div>

    
        <button
          disabled={isDisabled}
          className={`h-8 w-28 rounded-lg m-3 text-white border border-white 
            ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#C599B6] hover:bg-[#b47ca9]'}`}
          onClick={toggel}
        >
          +Add Task
        </button>
      </div>
    </div>
  );
}

export default Navbar;
