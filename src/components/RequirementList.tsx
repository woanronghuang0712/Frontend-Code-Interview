import React from 'react';

function ListItem({ children }) {
  return <li className="mt-1">{children}</li>;
}

function RequirementList({ items }) {
  return (
    <ul className="list-decimal pl-6">
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  );
}

export default RequirementList;
