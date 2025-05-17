import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from "./ui/Switch";
import { Sun, Moon } from 'phosphor-react';
import { handeltheme } from './taskslice';
import { useEffect } from 'react';
function Navbar() {
  
  const theme=useSelector(store=>store.app.isdark)
  const check = useSelector(store => store.app);
  const isDisabled = !check.column || Object.keys(check.column).length === 0;
  const [darkMode, setDarkMode] = useState(theme); 
  const dispatch=useDispatch();
  useEffect(() => {
    setDarkMode(theme);
  }, [theme]);



  function handleThemeToggle(checked) {
    setDarkMode(checked);
    dispatch(handeltheme(checked));
  }

  return (
    <div className={`flex h-20 w-auto items-center gap-2 px-10 sticky top-0 z-30  ${darkMode?'bg-white dark:bg-gray-900  text-black dark:text-white':'bg-[#222222] dark:bg-gray-900  text-white dark:text-black'}`}>
     
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

    
        
      </div>
    </div>
  );
}

export default Navbar;
