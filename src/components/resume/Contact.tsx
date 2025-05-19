import React from 'react';
import { PersonalData } from '../../types/categories';

interface ContactProps {
  personalDetails: PersonalData
}

export default function Contact({ personalDetails }: ContactProps) {

  const { tel, email, website } = personalDetails;

  return (
    <section className="contact">
      <h2 className="section-heading">CONTACT</h2>

      {tel && <p className="list-item">{tel}</p>}
      {email && <p className="list-item">{email}</p>}
      {website && <p className="list-item">{website}</p>}
    </section>
  );
}
