import userData from '../constants/data'

export default function Experience() {
    return (
        <div id='experience' className="w-full p-2 md:mt-12">
            <div className="max-w-[1240px] max-auto flex flex-col justify-center h-full">
                <h1 className="text-5xl tracking-widest uppercase text-[#5651e5]">
                    Experience
                </h1>
            </div>
            <div className="mt-4">

                <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
                {/* Experience card */}
                {userData.experience.map((exp, idx) => (
                    <>
                    <ExperienceCard
                        title={exp.title}
                        desc={exp.desc.split('\n')}
                        year={exp.year}
                        company={exp.company}
                    />

                    {/* Check if it's the last data */}
                    {idx === userData.experience.length - 1 ? 
                        <div className='mb-4'></div> : (
                        <div className="divider-container flex flex-col items-center -mt-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                            <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                        </div>
                        <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                        </div>
                    )}
                    </>
                ))}
                </div>
            </div>
        </div>
    );
}
const ExperienceCard = ({ title, desc, year, company }) => {
    return (
        <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-200 z-10 mx-4">
            <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
                {year}
            </h1>
            <h1 className="font-semibold text-xl">{title}</h1>
            <p className='text-blue-600'>{company}</p>
            <p className="text-gray-600 dark:text-gray-600 my-2">
                <ul>
                    {
                        desc.map((sentence, i) => {
                            return (<li key={i}>{sentence}</li>)
                        })
                    }
                </ul>
            </p>
        </div>
    );
  };