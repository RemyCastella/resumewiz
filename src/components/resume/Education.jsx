import React from 'react';

export default function Education({ education }) {
  const elements = education.map((item) => (
    <section key={item.id}>
      <h3>{item.institution}</h3>
      <p>{item.degree}</p>
      <p>{item.dates}</p>
    </section>
  ));

  return (
    <>
      <h2>Education</h2>
      {elements}
    </>
  );
}
