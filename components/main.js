import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from 'next/image';
import Profile from '../public/assets/profile.jpg';
import userData from '../constants/data';
import Link from 'next/link';

export default function Main() {
    return (
        <div id='home' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center">
                <div>
                    <div className="mt-20 mb-8 flex flex-wrap justify-center align-bottom">
                        <div className="w-6/12 sm:w-4/12 px-4">
                            <Image
                                src={Profile}
                                alt='Picture of the author'
                                width='330'
                                height='440'
                                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                            />
                        </div>
                    </div>
                    
                    <h1 className="text-[#5651e5] py-4">
                        Hi, I&#39;m Hung Tien
                    </h1>

                    <p className="uppercase text-sm tracking-widest text-gray">
                        LET&#39;S BUILD SOMETHING TOGETHER
                    </p>
                    
                    <div class="relative flex items-center py-5">
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        Electrical Engineer with an immense interest
                        in Software Engineering. 
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <Link href={userData.urls.linkedin}>
                            <a>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                                    <FaLinkedinIn/>
                                </div>
                            </a>
                        </Link>
                        <Link href={userData.urls.github}>
                            <a>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                                    <FaGithub/>
                                </div>
                            </a>
                        </Link>
                        <Link href='mailto: leehungtien2nd@gmail.com'>
                            <a>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-75">
                                    <AiOutlineMail/>
                                </div>
                            </a>
                        </Link>
                    </div>    
                </div>
            </div>
        </div>
    );
}