import Image from 'next/image';
import css from 'programming-languages-logos/src/css/css.png'
import C from 'programming-languages-logos/src/c/c.png'
import javascript from 'programming-languages-logos/src/javascript/javascript.png'
import html from 'programming-languages-logos/src/html/html.png'
import cpp from 'programming-languages-logos/src/cpp/cpp.png'
import typescript from 'programming-languages-logos/src/typescript/typescript.png'
import python from 'programming-languages-logos/src/python/python.png'
import userData from '../constants/data'

export default function Skills() {
    return (
        <div id='skills' className="w-full lg:h-screen p-2">
            <div className="max-auto flex flex-col justify-center h-full">
                <h1 className="text-5xl tracking-widest uppercase text-[#5651e5]">
                    Skills
                </h1>
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-2">
                    <div>
                        <h3>Programming Languages</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {
                                userData.progLangs.map((item, idx) => (
                                    <div key={idx} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                        <div className='flex flex-col items-center justify-center'>
                                            <h3 className='text-[#7290b8]'>{item}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h3>Web Technologies</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {
                                userData.webTech.map((item, idx) => (
                                    <div key={idx} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                        <div className='flex flex-col items-center justify-center'>
                                            <h3 className='text-[#7290b8]'>{item}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h3>Machine Learning</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {
                                userData.ML.map((item, idx) => (
                                    <div key={idx} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                        <div className='flex flex-col items-center justify-center'>
                                            <h3 className='text-[#7290b8]'>{item}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}