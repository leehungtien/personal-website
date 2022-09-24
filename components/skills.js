import Image from 'next/image';

export default function Skills() {
    return (
        <div className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] max-auto flex flex-col justify-center h-full">
                <h1 className="text-5xl tracking-widest uppercase text-[#5651e5]">
                    Skills
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className='m-auto'>
                            <Image
                                src='/../public/assets/skills/html-5.png'
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
                </div>
            </div>
        </div>
    );
}
