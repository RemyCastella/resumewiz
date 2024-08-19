import { useState } from 'react';
import PersonalDetailInputs from './components/form/PersonalDetailInputs';
import EducationInputs from './components/form/EducationInputs';
import SkillsInputs from './components/form/SkillsInputs';
import CertificationsInputs from './components/form/CertificationsInputs';
CertificationsInputs;
import ProfileInputs from './components/form/ProfileInputs';
import JobInputs from './components/form/JobInputs';
import Header from './components/resume/Header';
import Contact from './components/resume/Contact';
import Education from './components/resume/Education';
import Skills from './components/resume/Skills';
import Certifications from './components/resume/Certifications';
import Profile from './components/resume/Profile';
import Experiences from './components/resume/Experiences';

export default function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: 'Remy Castella',
    jobTitle: 'Software Engineer',
    tel: '080-7178-9696',
    email: 'remy.jpen@gmail.com',
    website: '',
  });

  function changePersonalDetails(event) {
    const { value, name } = event.target;
    setPersonalDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  const [education, setEducation] = useState([
    {
      institution: 'University of Vermont',
      degree: 'Bachelors of Science, Neuroscience',
      dates: '2015-2019',
    },
  ]);

  function changeEducation(event) {}

  const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);

  const [certifications, setCertifications] = useState(['JLPT N1']);

  const [profile, setProfile] = useState(
    'I am an aspiring web developer based in Hokkaido, Japan.'
  );

  const [experiences, setExperiences] = useState([
    {
      title: 'Translator',
      organization: 'Freelance',
      date: '2021-Present',
      description: 'Translated web content for major Japanese firms',
    },
  ]);

  return (
    <>
      <section className="forms-container">
        <PersonalDetailInputs
          personalDetails={personalDetails}
          changePersonalDetails={changePersonalDetails}
        />
        <EducationInputs
          education={education}
          changeEducation={changeEducation}
        />
        <SkillsInputs />
        <CertificationsInputs />
        <ProfileInputs />
        <JobInputs />
      </section>

      <section className="resume">
        <Header personalDetails={personalDetails} />
        <Contact personalDetails={personalDetails} />
        <Education education={education} />
        <Skills skills={skills} />
        <Certifications skills={certifications} />
        <Profile profile={profile} />
        <Experiences experiences={experiences} />
      </section>
    </>
  );
}
