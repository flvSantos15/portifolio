import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { BannerProject } from '../../../components/BannerProject'
import { Header } from '../../../components/Header'
import { LoadingScreen } from '../../../components/LoadingScreen'

import { ProjectContainer } from '../../../styles/ProjectStyles'

interface IProject {
  slug: string
  title: string
  type: string
  description: string
  link: string
  thumbnail: string
}

interface ProjectProps {
  project: IProject
}

export default function Projeto() {
  const router = useRouter()

  if (router.isFallback) {
    return <LoadingScreen />
  }

  const project = {
    slug: 'ignite-Timer',
    title: 'IgniteTimer',
    type: 'project',
    description: 'Ignite Timer is an countdown application.',
    link: 'https://ignite-timer-flv-pa6g-326m6907k-flvsantos15.vercel.app/',
    thumbnail:
      'https://github.com/flvSantos15/ignite-timer-flv/raw/main/ignite-timer.png'
  }

  const building = true

  return (
    <ProjectContainer>
      <Head>
        <title>{project.title} | Meu portfólio</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>

      {building ? (
        <div>Em construção...</div>
      ) : (
        <>
          <Header />
          <BannerProject
            title={project.title}
            type={project.type}
            imgUrl={project.thumbnail}
          />

          <main>
            <p>{project.description}</p>
            <button type="button">
              <a href={project.link}>Ver projeto online</a>
            </button>
          </main>
        </>
      )}
    </ProjectContainer>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = 'ignite-Timer'

//   return ({
//     paths,
//     fallback: true
//   });
// }

// export const getStaticProps: GetStaticProps = async context => {
//   // const projeto = {
//   //   slug: response.uid,
//   //   title: response.data.title,
//   //   type: response.data.type,
//   //   description: response.data.description,
//   //   link: response.data.link.url,
//   //   thumbnail: response.data.thumbnail.url
//   // };
//   const projeto = {
//     slug: 'ignite-Timer',
//     title: 'IgniteTimer',
//     type: 'project',
//     description: 'Ignite Timer is an countdown application.',
//     link: 'https://ignite-timer-flv-pa6g-326m6907k-flvsantos15.vercel.app/',
//     thumbnail:
//       'https://github.com/flvSantos15/ignite-timer-flv/raw/main/ignite-timer.png'
//   };

//   return {
//     props: {
//       projeto
//     },
//     revalidate: 86400
//   };
// };
