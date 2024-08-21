import React from 'react';

export default function Contact({ personalDetails }) {
  const { tel, email, website } = personalDetails;

  return (
    <section className="contact">
      <h2 className="section-heading">CONTACT</h2>

      {tel && (
        <p className="list-item">
          <span>&#9830;</span>
          {tel}
        </p>
      )}
      {email && (
        <p className="list-item">
          <span>&#9830;</span>
          {email}
        </p>
      )}
      {website && (
        <p className="list-item">
          <span>&#9830;</span>
          {website}
        </p>
      )}
    </section>
  );
}
