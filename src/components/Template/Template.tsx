import React, { ReactNode } from "react";
interface PropsTemplate {
  children: ReactNode;
}

export default function Template({ children }: PropsTemplate) {
  return <div className="bg-zinc-800 bg-no-repeat bg-cover">{children}</div>;
}
