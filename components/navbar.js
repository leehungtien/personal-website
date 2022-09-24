import React, {useState, useEffect} from "react";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() =>{
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <div>
                    <ul className="hidden md:flex">
                        <li className="ml-10 text-sm uppercase cursor-pointer hover:scale-105 ease-in duration-75">
                            <Link href='/'>Home</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase cursor-pointer hover:scale-105 ease-in duration-75">
                            <Link href='#experience'>Experience</Link>
                        </li>
                        <li className="ml-10 text-sm uppercase cursor-pointer hover:scale-105 ease-in duration-75">
                            <Link href='#skills'>Skills</Link>
                        </li>
                        {/* <Link href='/'>
                            <li className="ml-10 text-sm uppercase cursor-pointer hover:scale-105 ease-in duration-75">
                                Projects
                            </li>
                        </Link> */}
                    </ul>
                    <div onClick={handleNav} className="md:hidden cursor-pointer hover:scale-105 ease-in duration-75">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

        {/* For small screens */}
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''}>
            <div className={
                    nav
                     ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w=[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                     : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                <div>
                    <div onClick={handleNav} className="float-right rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                        <AiOutlineClose/>
                    </div>
                </div>
                <div className="border-b border-gray-300 my-2">
                    <p className="w-[85%] md:w-[90%] py-4">Lets build something legendary together!</p>
                </div>
                <div className="py-2 flexflex-col">
                    <ul className="uppercase">
                        <Link href="/">
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Home</li>
                        </Link>
                        <Link href="#experience">
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Experience</li>
                        </Link>
                        <Link href="#skills">
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Skills</li>
                        </Link>
                        {/* <Link href="/">
                            <li className="py-4 text-sm">Projects</li>
                        </Link> */}
                    </ul>
                    <div className="pt-4">
                        <p className="uppercase tracking-widest text-[#5651e5]">
                            Let's Connect
                        </p>
                        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                <FaLinkedinIn/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                <FaGithub/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                <AiOutlineMail/>
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                <BsFillPersonLinesFill/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}