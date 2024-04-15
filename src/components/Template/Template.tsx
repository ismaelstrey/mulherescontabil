import React, { ReactNode } from "react";
interface PropsTemplate {
  children: ReactNode;
}

export function Template({ children }: PropsTemplate) {
  return <div className="flex flex-col bg-zinc-800 m-0 p-0">{children}</div>;
}
