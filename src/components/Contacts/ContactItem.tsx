import { ReactNode } from "react";
import { ContactItemContainer } from "./styles";

interface ContactItemProps {
  data: {
    icon: ReactNode;
    title: string;
    link?: string;
  };
}

export function Contact({ data }: ContactItemProps) {
  const redirectTo = () => {
    if (data.link) {
      window.open(data.link, "_blank");
    }
  };

  return (
    <ContactItemContainer onClick={redirectTo}>
      {data.icon}
      <h2>{data.title}</h2>
    </ContactItemContainer>
  );
}
