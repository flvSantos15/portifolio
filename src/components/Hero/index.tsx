/* eslint-disable react/jsx-no-comment-textnodes */
import { CodeItem, Container, InfosContainer, TextContainer } from "./styles";

export function Hero() {
  const info = {
    name: "Flavio",
    lastname: "Santos",
    role: "Mid Front-end Developer",
    address: {
      city: "São Luís",
      state: "MA",
      country: "Brazil",
    },
  };

  return (
    <Container data-aos="fade-up">
      {/* <div className="logo">
        <Image src={picture} alt="Minha foto" />
      </div> */}

      <div>
        <TextContainer>
          <h1>Hi There!</h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2>
            My name&apos;s {info.name} {info.lastname}
          </h2>
        </TextContainer>
        <InfosContainer>
          {/* <CodeItem data-aos="zoom-in">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Flavio,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Santos</span>
            </div>
            {'\u007D'}
          </CodeItem> */}
          <CodeItem data-aos="zoom-in">
            <span className="purple">About</span> {"\u007B"}
            <div>
              Role: <span className="blue">{info.role},</span>
            </div>
            <div>
              City:{" "}
              <span className="blue">
                {info.address.city} - {info.address.state}
              </span>
            </div>
            {"\u007D"}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
