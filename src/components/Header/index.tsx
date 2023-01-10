/* eslint-disable react/button-has-type */
import { useRouter } from 'next/router';
import { NavLink } from './NavLink';
import { Container } from './styles';

export function Header() {
  const router = useRouter();

  const redirectToContact = () => {
    router.push('/contacts');
  };

  return (
    <Container>
      <div>
        <h1>flvSantos</h1>
        <ul>
          <NavLink title="Home" path="/" />
          <NavLink title="Projects" path="/projects" includes />
          {/* <NavLink title="Blog" path="/blog" includes /> */}
        </ul>
      </div>
      <button onClick={redirectToContact}>Contacts</button>
    </Container>
  );
}
