import React from 'react';
import { CertificationData } from '../../types/categories';

interface CertificationsProps {
  certifications: CertificationData[]
}

export default function Certifications({ certifications }: CertificationsProps) {
  const elements = certifications.map((item) => {
    return (
      <p className="list-item" key={item.id}>
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
