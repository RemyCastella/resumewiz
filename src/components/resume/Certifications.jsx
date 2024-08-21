import React from 'react';

export default function Certifications({ certifications }) {
  const elements = certifications.map((item) => {
    return (
      <p className="list-item" key={item.id}>
        <span>&#9830;</span>
        {item.certification}
      </p>
    );
  });

  return (
    <section className="certifications">
      <h2 className="section-heading">CERTIFICATIONS</h2>
      {elements}
    </section>
  );
}
