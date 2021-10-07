import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

const MobileNav = () => {
    return (
        <>
            <div className="flex justify-between items-center w-full md:hidden">
                <div className="w-24 ml-4">
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Company Logo" className="w-full h-full" />
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-navColor-400 text-white px-3 py-2 text-xs rounded-full font-bold">
                        Use App
                    </button>
                    <span className="border p-1.5 border-navCol-300 text-navColor-300 rounded-full w-8">
                        <FaPizzaSlice className="w-full h-full" />
                    </span>
                </div>
            </div>
        </>
    )
}

const Navbar = () => {
    return (
        <>
            <nav className="px-3 py-3 bg-white shadow-md">
                <MobileNav />
            </nav>   
        </>
    )
}

export default Navbar;