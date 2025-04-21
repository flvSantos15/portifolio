import { ReactNode } from "react";

interface KnowledgeProps {
  title: string;
  icon: ReactNode;
}

export function KnowledgeItem({ title, icon }: KnowledgeProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full bg-background p-4 rounded-lg">
      {/* <p>{title}</p> */}
      {icon}
    </div>
  );
}
