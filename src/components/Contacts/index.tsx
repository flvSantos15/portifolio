import { ImGithub, ImLinkedin2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

import { Contact } from "./ContactItem";
import { Container } from "./styles";

const socialMedia = [
  {
    id: 1,
    icon: <MdEmail size="2rem" />,
    title: "flvSantos300@gmail.com",
    link: "mailto:flvSantos300@gmail.com",
  },
  {
    id: 2,
    icon: <ImLinkedin2 size="2rem" />,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/flvsantos15/",
  },
  {
    id: 3,
    icon: <ImGithub size="2rem" />,
    title: "Github",
    link: "https://github.com/flvSantos15",
  },
];

export function ContactList() {
  return (
    <Container>
      <h1>Contacts</h1>

      <div>
        {socialMedia.map((contact) => {
          return <Contact key={contact.id} data={contact} />;
        })}
      </div>
    </Container>
  );
}
