import React, { useState, ChangeEvent } from 'react';
import { IoChevronForward, IoChevronDownOutline } from 'react-icons/io5';
import { ProfileData } from '../../types/categories';

interface ProfileInputsProps {
  profile: ProfileData,
  changeProfile: (event: ChangeEvent<HTMLTextAreaElement>) => void
}


export default function ProfileInputs({ profile, changeProfile }: ProfileInputsProps) {
  const [view, setView] = useState<string>('closed');

  if (view === 'closed') {
    return (
      <div className="personal-detail-form">
        <div className="form-header" onClick={() => setView('form')}>
          <h2>Profile</h2>
          <IoChevronForward size={30} />
        </div>
      </div>
    );
  }

  return (
    <div className="personal-detail-form">
      <div className="form-header" onClick={() => setView('closed')}>
        <h2>Profile</h2>
        <IoChevronDownOutline size={30} />
      </div>
      <form>
        <label>
          <textarea value={profile} onChange={changeProfile} />
        </label>
      </form>
    </div>
  );
}
