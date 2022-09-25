import Image from 'next/image';
import css from 'programming-languages-logos/src/css/css.png'
import C from 'programming-languages-logos/src/c/c.png'


export default function Skills() {
    return (
        <div id='skills' className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] max-auto flex flex-col justify-center h-full">
                <h1 className="text-5xl tracking-widest uppercase text-[#5651e5]">
                    Skills
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className='m-auto'>
                            <Image
                                src='/../public/assets/skills/html.png'
                                width='64px'
                                height='64px'
                                alt='/'
                            />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className='m-auto'>
                            <Image
                                src='/../public/assets/skills/javascript.png'
                                width='64px'
                                height='64px'
                                alt='/'
                            />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className='m-auto'>
                            <Image
                                src='/../public/assets/skills/c++.png'
                                width='64px'
                                height='64px'
                                alt='/'
                            />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C++</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className='m-auto'>
                            <Image
                                src='/../public/assets/skills/python.png'
                                width='64px'
                                height='64px'
                                alt='/'
                            />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className='m-auto'>
                            <Image
                                src='/../public/assets/skills/typescript.png'
                                width='64px'
                                height='64px'
                                alt='/'
                            />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>TypeScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className='m-auto'>
                            <Image
                                src={css}
                                width='64px'
                                height='64px'
                                alt='/'
                            />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className='m-auto'>
                            <Image
                                src={C}
                                width='64px'
                                height='64px'
                                alt='/'
                            />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>C</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}