import React, {useState, useEffect} from "react";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu, AiFillLinkedin} from 'react-icons/ai';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import userData from '../constants/data'

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');

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
        <div 
            style={{ backgroundColor: `${navBg}`}}
            className={
                shadow
                ? 'fixed w-full h-20 shadow-xl z-[100]'
                : 'fixed w-full h-20 z-[100]'}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <div className="flex flex-col px-4">
                    <Link href="/">
                        <a>
                        <h1 className="font-semibold text-xl dark:text-gray-800">
                            LEE HUNG TIEN
                        </h1>
                        <p className="text-base font-light text-gray-800 dark:text-gray-800">
                            Aspiring Software Engineer
                        </p>
                        </a>
                    </Link>
                </div>
                <div>
                    <ul className="hidden md:flex mr-32">
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
                <div className="md:flex items-center justify-between hidden px-2">
                    <Link href={userData.urls.linkedin}>
                        <a>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                <FaLinkedinIn/>
                            </div>
                        </a>
                    </Link>
                    <Link href={userData.urls.github}>
                        <a>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                <FaGithub/>
                            </div>
                        </a>
                    </Link>
                    <Link href='mailto: leehungtien2nd@gmail.com'>
                        <a>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                <AiOutlineMail/>
                            </div>
                        </a>
                    </Link>
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
                            Let&apos;s Connect
                        </p>
                        <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                            <Link href={userData.urls.linkedin}>
                                <a>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                        <FaLinkedinIn/>
                                    </div>
                                </a>
                            </Link>
                            <Link href={userData.urls.github}>
                                <a>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                        <FaGithub/>
                                    </div>
                                </a>
                            </Link>
                            <Link href='mailto: leehungtien2nd@gmail.com'>
                                <a>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                                        <AiOutlineMail/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}