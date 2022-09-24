import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';
import Profile from '../public/assets/profile.jpg';

export default function Main() {
    return (
        <div id='home' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <div className="md:mt-20 mb-4 flex flex-wrap justify-center">
                        <div className="w-6/12 sm:w-4/12 px-4">
                            <Image
                                src={Profile}
                                alt='Picture of the author'
                                width='300'
                                height='400'
                                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                            />
                        </div>
                    </div>
                    <p className="uppercase text-sm tracking-widest text-gray">
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className="text-[#5651e5] py-4">
                        Hi, I'm Hung Tien
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        Electrical Engineer with an immense interest
                        in Software Engineering. 
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                            <FaLinkedinIn/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                            <FaGithub/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                            <AiOutlineMail/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
}