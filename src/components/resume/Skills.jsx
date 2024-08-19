import React from 'react';

export default function Skills({ skills }) {
  const elements = skills.map((item) => {
    return <li key={item.id}>{item.skill}</li>;
  });

  return (
    <>
      <h2>Skills</h2>
      {elements}
    </>
  );
}
