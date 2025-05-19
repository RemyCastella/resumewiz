import React from 'react';
import { ProfileData } from "../../types/categories"

interface ProfileProps {
  profile: ProfileData
}

export default function Profile({ profile }: ProfileProps) {
  return (
    <section className="profile">
      <h2 className="section-heading">PROFILE</h2>
      <p>{profile}</p>
    </section>
  );
}
