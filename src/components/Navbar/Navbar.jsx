import React, { useState } from "react";
import Link from "../Link/Link";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
    const [open,setOpen]=useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/services", name: "Services" },
    { id: 5, path: "/blog", name: "Blog" },
  ];
  return (
    <div className="bg-black items-center text-white font-bold p-6" >
       <div onClick={()=>setOpen(!open)} className="md:hidden text-xl font-bold">
        {
            open ?<IoCloseSharp /> :   <MdOutlineMenu  />
        }
      
       </div>
  <ul className={`md:flex duration-1000 absolute md:static
            ${open ? 'top-12': '-top-60'}
            bg-black px-6 rounded-lg shadow-lg`}>

  {routes.map(route => 
        <Link key={route.id} e={route}></Link>
      )}
  </ul>
    </div>
  );
};

export default Navbar;
