/* eslint-disable react/button-has-type */
import { useRouter } from 'next/router'
import Link from 'next/link'
import * as Menubar from '@radix-ui/react-menubar'

import { NavLink } from './NavLink'

import {
  Container,
  Content,
  BaseItem,
  ItemBottom,
  ItemTop,
  MobileContainer,
  Trigger
} from './styles'
import { AiOutlineMenu } from 'react-icons/ai'

export function Header() {
  const router = useRouter()

  const redirectToContact = () => {
    router.push('/contacts')
  }

  return (
    <>
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

      <MobileContainer>
        <h1>flvSantos</h1>
        <Menubar.Root>
          <Menubar.Menu>
            <Trigger>
              <AiOutlineMenu className="text-backgroundLight" />
            </Trigger>
            <Menubar.Portal>
              <Content align="end" sideOffset={8}>
                <ItemTop>
                  <Link href={'/'}>Home</Link>
                </ItemTop>
                <BaseItem>
                  <Link href={'/projects'}>Projects</Link>
                </BaseItem>
                <ItemBottom>
                  <button onClick={redirectToContact}>Contacts</button>
                </ItemBottom>
              </Content>
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
      </MobileContainer>
    </>
  )
}
