import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import Aos from 'aos'
import { client, ssrCache } from '../lib/urql'
import { useProjectsQuery, ProjectsDocument } from '../generated/graphql'

import { HomeContainer } from '../styles/HomeStyles'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Experiences } from '../components/Experiences'
import { Projects } from '../components/Projects'
import { Knowledges } from '../components/Knowledges'
// import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer'

import 'aos/dist/aos.css'

interface IProjeto {
  id: string
  description: string
  name: string
  slug: string
  type?: string
  tags: string[]
  link?: string
  image: {
    url: string
  }
}

export default function Home() {
  const [{ data }] = useProjectsQuery()

  // deu certo
  // console.log(data)

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <HomeContainer>
      <Head>
        <title>Flávio Santos</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />

      <main className="container">
        <Hero />
        <Experiences />
        <Projects projects={data?.projects} />
        <Knowledges />
      </main>
      {/* <ContactForm /> */}

      <Footer />
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client.query(ProjectsDocument, {}).toPromise()

  return {
    props: {
      urqlState: ssrCache.extractData()
    }
  }
}
