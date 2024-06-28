"use client"

import { useEffect, useState } from "react";

const Navbar = () => {
    const  [iconBar, setIconBar] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const value: string | null = localStorage.getItem('theme');
        setTheme(!value ? "light" : value);
      }, []);

      function changeTheme(props: string) {
        setTheme(props);
        localStorage.setItem('theme', props);
      }
    return (
        <div className={`w-full h-20  flex items-center justify-center ${theme == "light" ? "" : "bg-gray-700 "}`}>
            <div className="flex items-center justify-between w-[95%] gap-2">
            <div className="flex items-center gap-2 ">
               <div className="h-8 w-9 flex items-center justify-center hover:border-2 hover:bg-gray-200 rounded-md">
               <img src="/menu.png" onClick={()=>{setIconBar(!iconBar)}} className="h-6  font-light active:h-7 sm:hidden"/>
               </div>
               {
                iconBar == true ? <div className={`absolute rounded-lg sm:hidden left-[5%] top-[10%] border-4  p-4 w-[75%] flex flex-col gap-2 text-xl  font-medium ${theme == "light" ? "bg-gray-200 text-gray-500" : "text-white bg-gray-800"}`}>
                <div className={`border-b-2  pt-1 rounded-lg pb-2  active:font-extrabold cursor-pointer pl-2 ${theme == "light" ? "hover:bg-gray-300 " : "hover:bg-gray-500"}`}>HOME</div>
                <div className={`border-b-2  pt-1 rounded-lg pb-2  active:font-extrabold cursor-pointer pl-2 ${theme == "light" ? "hover:bg-gray-300 " : "hover:bg-gray-500"}`}>About</div>
                <div className={`border-b-2  pt-1 rounded-lg pb-2  active:font-extrabold cursor-pointer pl-2 ${theme == "light" ? "hover:bg-gray-300 " : "hover:bg-gray-500"}`}>Projects</div>
                <div className={`border-b-2  pt-1 rounded-lg pb-2  active:font-extrabold cursor-pointer pl-2 ${theme == "light" ? "hover:bg-gray-300 " : "hover:bg-gray-500"}`}>Certificates & Achievements</div>
                <div className={`border-b-2  pt-1 rounded-lg pb-2  active:font-extrabold cursor-pointer pl-2 ${theme == "light" ? "hover:bg-gray-300 " : "hover:bg-gray-500"}`}>Contact</div>
           </div>  : null
               }
               <div className={`text-3xl font-semibold text-indigo-950 ${theme == "light" ? "" : "text-white"}`}>Port <span className="text-indigo-400">folio</span></div>
               <div className={`hidden sm:block ml-8`}>
                  <div className="flex items-center justify-center gap-4 w-full font-medium cursor-pointer text-xl">
                  <div className={`${theme == "light" ? "active:text-gray-500" : "text-gray-200 active:text-gray-500 "}`}>HOME</div>
                  <div className={`${theme == "light" ? "active:text-gray-500" : "text-gray-200 active:text-gray-500 "}`}>About</div>
                  <div className={`${theme == "light" ? "active:text-gray-500" : "text-gray-200 active:text-gray-500 "}`}>Projects</div>
                  <div className={`${theme == "light" ? "active:text-gray-500" : "text-gray-200 active:text-gray-500 "}`}>Contact</div>
                  </div>
               </div>
            </div>
            <div className=" flex items-center justify-center">
                  <div className=" h-8 w-8 flex items-center justify-center ">
                   {
                    theme == 'light' ?  <img onClick={() => changeTheme('dark')} src="/moon.png" className="h-6" /> :
                    <img onClick={() => changeTheme('light')} src="/sun.png" className="h-6" />
                   }
                  </div>
            </div>
            </div>
            
        </div>
    )
}
export default Navbar;