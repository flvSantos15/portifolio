import {
  AiFillLinkedin,
  // AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

import { Container } from "./styles";

export function Footer() {
  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          {/* <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com')}
          /> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#fff",
            }}
          >
            <AiOutlineGithub style={{ width: "1.5rem", height: "1.5rem" }} />
            <span>Github:</span>
            <a href="https://github.com/flvSantos15" style={{ color: "#fff" }}>
              {" "}
              flvSantos15
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#fff",
            }}
          >
            <AiFillLinkedin style={{ width: "1.5rem", height: "1.5rem" }} />
            <span>LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/flvsantos15/"
              style={{ color: "#fff" }}
            >
              {" "}
              flvSantos15
            </a>
          </div>
        </section>
      </div>
    </Container>
  );
}
