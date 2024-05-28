
export function MainTitle({children}) {
  return (
    <h1 className="font-bold text-4xl text-center">
      {children}
    </h1>
  );
}

export function CodeSpan({ children, first }) {
  const baseStyle = "font-bold inline py-0.5 px-1.5 border border-amber-400 bg-amber-50 rounded";
  const decorStyle = first ? baseStyle : `${baseStyle} mx-1`;
  return <span className={decorStyle}>{children}</span>;
}

export function EmphasisStr({ children, first }) {
  const decorStyle = !first ? "mx-1" : "";
  return <strong className={decorStyle}>{children}</strong>;
}

export function Paragraph({ paragraphs, intro }) {
  const firstOfTypeClass = intro ? "first-of-type:mt-6" : "first-of-type:mt-1";
  
  return paragraphs.map((text, index) => (
    <p key={index} className={`mt-4 ${firstOfTypeClass}`}>
      {text}
    </p>
  ));
}

import React, { ReactNode } from 'react';

type ProblemsProps = {
  title: string;
  contents: ReactNode;
};

export function Problems({ title, contents }) {
  return (
    <div className="mt-6 border-t pt-6">
      <h2 className="text-xl font-bold">{title}</h2>
      {contents}
    </div>
  );
}



function ListItem({ children }) {
  return <li className="mt-1">{children}</li>;
}

export function RequirementList({ items }) {
  return (
    <ul className="list-decimal pl-6">
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  );
}



