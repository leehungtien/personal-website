import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Main from '../components/main'
import Skills from '../components/skills'
import Experience from '../components/experience'

export default function Home({ allSkillsID }) {
  return (
    <div>
      <Head>
        <title>Lee Hung Tien</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div className='flex flex-col sm:space-y-20'>
        <Main/>
        <Experience/>
        <Skills/>
      </div>
    </div>
  )
}
