/* eslint-disable react/button-has-type */
import * as Menubar from "@radix-ui/react-menubar";
import Link from "next/link";
import { useRouter } from "next/router";

import { NavLink } from "./NavLink";

import { AiOutlineMenu } from "react-icons/ai";
import {
  BaseItem,
  Container,
  Content,
  ItemTop,
  MobileContainer,
  Trigger,
} from "./styles";

export function Header() {
  const router = useRouter();

  const redirectToContact = () => {
    router.push("/contacts");
  };

  return (
    <>
      <Container>
        <div>
          {/* <h1>flvSantos</h1> */}
          <ul>
            <NavLink title="Home" path="/" />
            <NavLink title="Projects" path="/projects" includes />
            {/* <NavLink title="Blog" path="/blog" includes /> */}
          </ul>
        </div>
        {/* <button onClick={redirectToContact}>Contacts</button> */}
      </Container>

      <MobileContainer>
        {/* <h1>flvSantos</h1> */}
        <Menubar.Root>
          <Menubar.Menu>
            <Trigger>
              <AiOutlineMenu className="text-backgroundLight" />
            </Trigger>
            <Menubar.Portal>
              <Content align="end" sideOffset={8}>
                <ItemTop>
                  <Link href={"/"}>Home</Link>
                </ItemTop>
                <BaseItem>
                  <Link href={"/projects"}>Projects</Link>
                </BaseItem>
                {/* <ItemBottom>
                  <button onClick={redirectToContact}>Contacts</button>
                </ItemBottom> */}
              </Content>
            </Menubar.Portal>
          </Menubar.Menu>
        </Menubar.Root>
      </MobileContainer>
    </>
  );
}
