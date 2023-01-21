import { SectionTitle } from '../SectionTitle'
import { ExperienciaItem } from './ExperienceItem'
import { Container } from './styles'

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="3 Years" description="of experience" />

      <section>
        {/* <ExperienciaItem
          year="2018"
          title="Dev Front-end"
          description="Lorem ipsum dolor sdsadas it amet, consectetur adipiscing elit. Aliquam"
        /> */}
        <ExperienciaItem
          year="2020"
          title="Dev Front-end and Mobile"
          description="
            Gaining experience through various personal projects, for more details, please check out at my github account.
          "
        />
        <ExperienciaItem
          year="2021"
          title="Front-end at Main Leaf"
          description="I developed an agile project management application from scratch using ReactJS and NextJS. With login features, account creation, password recovery and change, profile update, searches, filters, graph data, integration with APIs, dashboard, time control (addition of manual hours, hours per project, per person, etc.), project management (create, edit, archive, add or remove people), collaborator management for project managers."
        />
        <ExperienciaItem
          year="2022"
          title="Front-end na Xgrow Learning Experience"
          description="I have worked with API Integration, notebook creation for classes using Firebase, generating PDF certificates according to data from API, built pages from total zero with ReactJS with sign-in functionalities, 
          bug fixing in production, developed E2E integration tests with Cypress."
        />
      </section>
    </Container>
  )
}
