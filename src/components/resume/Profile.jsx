import React from 'react';

export default function Profile({ profile }) {
  return (
    <section className="profile">
      <h2 className="section-heading">PROFILE</h2>
      <p>{profile}</p>
    </section>
  );
}
