import React from 'react';
import { PersonalData } from '../../types/categories';

interface HeaderProps {
  personalDetails: PersonalData
}

export default function Header({ personalDetails }: HeaderProps) {
  const { fullName, jobTitle } = personalDetails;

  return (
    <section className="header">
      <h1 className="header-name">{fullName.toUpperCase()}</h1>
      <p className="header-title">{jobTitle}</p>
    </section>
  );
}
