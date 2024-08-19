import React, { useState } from 'react';

export default function SkillsInputs({ skills, changeSkills }) {
  const [activeId, setActiveId] = useState(0);
  const { skill } = skills[activeId];

  return (
    <form className="personal-detail-form">
      <h2>Skills</h2>
      <label>
        Skill:
        <input
          type="text"
          name="skill"
          value={skill}
          onChange={(event) => changeSkills(event, activeId)}
        />
      </label>
    </form>
  );
}
