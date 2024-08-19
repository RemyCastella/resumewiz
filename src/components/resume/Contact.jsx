import React from 'react';

export default function Contact({ personalDetails }) {
  const { tel, email, website } = personalDetails;

  return (
    <>
      <h2>Contact</h2>

      {tel && <li>{tel}</li>}
      {email && <li>{email}</li>}
      {website && <li>{website}</li>}
    </>
  );
}
