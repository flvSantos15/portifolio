import { MdEmail } from 'react-icons/md';
import { ImLinkedin2, ImGithub } from 'react-icons/im';

import { Container } from './styles';
import { ContactItem } from './ContactItem';

export function Contact() {
  return (
    <Container>
      <h1>Contacts</h1>

      <div>
        <ContactItem
          icon={<MdEmail size="2rem" />}
          title="flvSantos300@gmail.com"
          link="mailto:flvSantos300@gmail.com"
        />

        <ContactItem
          icon={<ImLinkedin2 size="2rem" />}
          title="Linkedin"
          link="https://www.linkedin.com/in/flvsantos15/"
        />

        <ContactItem
          icon={<ImGithub size="2rem" />}
          title="Github"
          link="https://github.com/flvSantos15"
        />
      </div>
    </Container>
  );
}
