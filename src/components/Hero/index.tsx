/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image'
import { Container, TextContainer, InfosContainer, CodeItem } from './styles'
import picture from '../../assets/perfil.png'

export function Hero() {
  return (
    <Container data-aos="fade-up">
      <Image src={picture} alt="Minha foto" height={600} />
      {/* <img
        src="https://raw.githubusercontent.com/GBDev13/youtube-meuprimeiroportfolio/main/src/assets/pessoa.webp"
        alt="Minha foto"
      /> */}
      <div>
        <TextContainer>
          <h1>Hi There!</h1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2>My name's Flavio</h2>
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
            <span className="purple">About</span> {'\u007B'}
            <div>
              Role: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              City: <span className="blue">São Luís</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  )
}
