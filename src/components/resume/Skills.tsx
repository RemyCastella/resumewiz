import React from 'react';
import { SkillData } from '../../types/categories';

interface SkillsProps {
  skills: SkillData[]
}

export default function Skills({ skills }: SkillsProps) {

  const elements = skills.map((item) => {
    return (
      <p className="list-item" key={item.id}>
        {item.skill}
      </p>
    );
  });

  return (
    <section className="skills">
      <h2 className="section-heading">SKILLS</h2>
      {elements}
    </section>
  );
}
