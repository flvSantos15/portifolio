import { ReactNode } from "react";

interface KnowledgeProps {
  title: string;
  icon: ReactNode;
}

export function KnowledgeItem({ title, icon }: KnowledgeProps) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center gap-3 w-full"
    >
      {/* <p>{title}</p> */}
      {icon}
    </div>
  );
}
