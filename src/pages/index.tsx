import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import Aos from 'aos'

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
  slug: string
  title: string
  type: string
  description: string
  link: string
  thumbnail: string
}

interface HomeProps {
  projects: IProjeto[]
}

export default function Home({ projects }: HomeProps) {
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
        <Projects projects={projects} />
        <Knowledges />
      </main>
      {/* <ContactForm /> */}

      <Footer />
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // const prismicInstace = getPrismicClient();

  // const projectResponse = await prismicInstace.get({
  //   predicates: prismic.predicate.at('document.type', 'project'),
  //   lang: 'pt-BR'
  //   //   // { orderings: '[document.first_publication_date desc]' }
  // });

  // console.log(projectResponse, 'resposta do prismic');

  const projects = [
    {
      slug: 'ignite-Timer',
      title: 'IgniteTimer',
      type: 'project',
      description: 'Ignite Timer is an countdown application.',
      link: 'https://ignite-timer-flv-pa6g-326m6907k-flvsantos15.vercel.app/',
      thumbnail:
        'https://github.com/flvSantos15/ignite-timer-flv/raw/main/ignite-timer.png'
    },
    // {
    //   slug: 'ignite-news',
    //   title: 'IgniteNews',
    //   type: 'project',
    //   description:
    //     'It is a NewsLetter application, where the user sees a preview of an article if he does not have subscription, which he can do with his github, and assign for a payment per month. After he is able to see and read all articles coming from a database.',
    //   link: 'https://ignews-flvsantos-54v09lqxc-flvsantos15.vercel.app/',
    //   thumbnail:
    //     'https://github.com/flvSantos15/aula03-ignews/raw/main/capa.png'
    // },
    {
      slug: 'move-it',
      title: 'Move It',
      type: 'project',
      description:
        'Move.It is an application that helps users with the polmodoro technique, witch helps users to be focused.',
      link: 'https://moveit-next-zeta-ivory.vercel.app/',
      thumbnail:
        'https://github.com/flvSantos15/nlw04-MoovitNext-RocketSeat-flvSantos/raw/main/Inicio-moveit.png'
    },
    {
      slug: 'world-trip',
      title: 'World Trip',
      type: 'project',
      description: 'It is a website describing the continents and its cities.',
      link: 'http://world-trip-delta.vercel.app/',
      thumbnail:
        'https://github.com/flvSantos15/desafio-07-rckt-chakra-ui/raw/main/chakra-ui.png'
    }
    // {
    //   slug: 'cycle-sleep-calculator',
    //   title: 'Cycle Sleep Calculator',
    //   type: 'project',
    //   description:
    //     'xSleepCycle is an application that calculates the time you should go to bed or wake up according to the cycles of sleep you want to rest.',
    //   link: 'http://sleep-cycle-calculator-sigma.vercel.app/',
    //   thumbnail:
    //     'https://github.com/flvSantos15/cycle_sleep_calculator/raw/main/sleep-cycle.png'
    // }
  ]
  // const projects = projectResponse.results.map(projeto => ({
  //   slug: projeto.uid,
  //   title: projeto.data.title,
  //   type: projeto.data.type,
  //   description: projeto.data.description,
  //   link: projeto.data.link.url,
  //   thumbnail: projeto.data.thumbnail.url
  // }));

  // const projetos = ['projeto1', 'projecto2'];

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
