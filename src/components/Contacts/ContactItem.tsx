import { ReactNode } from 'react';
import { ContactItem as Contact } from './styles';

interface ContactItemProps {
  icon: ReactNode;
  title: string;
  link?: string;
}

export function ContactItem({ icon, title, link }: ContactItemProps) {
  const redirectTo = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Contact onClick={redirectTo}>
      {icon}
      <h2>{title}</h2>
    </Contact>
  );
}
