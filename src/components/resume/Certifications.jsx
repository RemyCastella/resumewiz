import React from 'react';

export default function Certifications({ certifications }) {
  const elements = certifications.map((item) => {
    return <li key={item.id}>{item.certification}</li>;
  });

  return (
    <>
      <h2>Certifications</h2>
      {elements}
    </>
  );
}
