import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Main from '../components/main'
import Skills from '../components/skills'
import Experience from '../components/experience'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lee Hung Tien</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <Experience/>
      <Skills/>
    </div>
  )
}
