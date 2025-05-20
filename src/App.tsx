import { useState, ChangeEvent } from 'react';

// Inputs components
import PersonalDetailInputs from './components/form/PersonalDetailInputs';
import EducationInputs from './components/form/EducationInputs';
import SkillsInputs from './components/form/SkillsInputs';
import CertificationsInputs from './components/form/CertificationsInputs';
import ProfileInputs from './components/form/ProfileInputs';
import JobInputs from './components/form/JobInputs';

// Resume display components
import Header from './components/resume/Header';
import Contact from './components/resume/Contact';
import Education from './components/resume/Education';
import Skills from './components/resume/Skills';
import Certifications from './components/resume/Certifications';
import Profile from './components/resume/Profile';
import Experiences from './components/resume/Experiences';

// Resume data types
import { PersonalData, EducationData, SkillData, CertificationData, ProfileData, ExperienceData} from './types/categories';

import { IoSparkles } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [personalDetails, setPersonalDetails] = useState<PersonalData>({
    fullName: 'Remy Castella',
    jobTitle: 'Web Developer',
    tel: '080-7178-9696',
    email: 'remy.jpen@gmail.com',
    website: 'https://github.com/RemyCastella',
  });

  function changePersonalDetails(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setPersonalDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  }

  const [education, setEducation] = useState<EducationData[]>([
    {
      id: uuidv4(),
      institution: 'University of Vermont',
      degree: 'Bachelors of Science, Neuroscience',
      dates: '2015-2019',
    },
    {
      id: uuidv4(),
      institution: 'Shanghai American School',
      degree: 'High School Diploma',
      dates: '2011-2015',
    },
  ]);

  function changeEducation(event: ChangeEvent<HTMLInputElement>, activeId: string) {
    const { name, value } = event.target;
    setEducation((prevEducation) =>
      prevEducation.map((item) => {
        return item.id === activeId ? { ...item, [name]: value } : item;
      })
    );
  }

  function deleteEducation(activeId: string) {
    setEducation((prevEducation) =>
      prevEducation.filter((item) => item.id !== activeId)
    );
  }

  function createEducation(id: string) {
    setEducation((prevEd) => [
      ...prevEd,
      {
        id: id,
        institution: '',
        degree: '',
        dates: '',
      },
    ]);
  }

  const [skills, setSkills] = useState<SkillData[]>([
    { id: uuidv4(), skill: 'HTML' },
    { id: uuidv4(), skill: 'CSS' },
    { id: uuidv4(), skill: 'JavaScript' },
    { id: uuidv4(), skill: 'React' },
  ]);

  function changeSkills(event: ChangeEvent<HTMLInputElement>, activeId: string) {
    const { name, value } = event.target;
    setSkills((prevSkills) =>
      prevSkills.map((item) => {
        return item.id === activeId ? { ...item, [name]: value } : item;
      })
    );
  }

  function deleteSkill(activeId: string) {
    setSkills((prevSkills) =>
      prevSkills.filter((item) => item.id !== activeId)
    );
  }

  function createSkill(id: string) {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        id: id,
        skill: '',
      },
    ]);
  }

  const [certifications, setCertifications] = useState<CertificationData[]>([
    { id: uuidv4(), certification: 'JLPT N1' },
    { id: uuidv4(), certification: '二級翻訳士' },
  ]);

  function changeCertifications(event: ChangeEvent<HTMLInputElement>, activeId: string) {
    const { name, value } = event.target;
    setCertifications((prevSkills) =>
      prevSkills.map((item) => {
        return item.id === activeId ? { ...item, [name]: value } : item;
      })
    );
  }

  function deleteCertification(activeId: string) {
    setCertifications((prevCerts) =>
      prevCerts.filter((item) => item.id !== activeId)
    );
  }

  function createCertification(id: string) {
    setCertifications((prevCert) => [
      ...prevCert,
      {
        id: id,
        certification: '',
      },
    ]);
  }

  const [profile, setProfile] = useState<ProfileData>(
    'I am an aspiring web developer based in Hokkaido, Japan.'
  );

  function changeProfile(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    setProfile(value);
  }

  const [experiences, setExperiences] = useState<ExperienceData[]>([
    {
      id: uuidv4(),
      title: 'Translator',
      organization: 'Freelance',
      dates: 'September 2021-Present',
      description:
        'I mainly translate web content for major Japanese firms. I also have a book published.',
    },
    {
      id: uuidv4(),
      title: 'Translator',
      organization: 'Routing Systems Inc.',
      dates: 'September 2021-May 2023',
      description: `Translated the entire website and app of one of Japan's largest English learning services.`,
    },
    {
      id: uuidv4(),
      title: 'English Teacher',
      organization: 'Trygroup Inc.',
      dates: 'January 2020-October 2020',
      description: `Taught English to children, from infants to teenagers, at one of Tokyo's most popular English schools.`,
    },
  ]);

  function changeExperiences(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, activeId: string) {
    const { name, value } = event.target;
    setExperiences((prevExperiences) =>
      prevExperiences.map((item) => {
        return item.id === activeId ? { ...item, [name]: value } : item;
      })
    );
  }

  function deleteExperience(activeId: string) {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((item) => item.id !== activeId)
    );
  }

  function createExperience(id: string) {
    setExperiences((prevExp) => [
      ...prevExp,
      {
        id: id,
        title: '',
        organization: '',
        dates: '',
        description: '',
      },
    ]);
  }

  return (
    <>
      <header>
        <p id="service-name">ResumeWiz</p>
        <IoSparkles size={50} style={{ color: '#646cff71' }} />
      </header>

      <main>
        <section className="forms-container">
          <PersonalDetailInputs
            personalDetails={personalDetails}
            changePersonalDetails={changePersonalDetails}
          />
          <EducationInputs
            education={education}
            changeEducation={changeEducation}
            deleteEducation={deleteEducation}
            createEducation={createEducation}
          />
          <SkillsInputs
            skills={skills}
            changeSkills={changeSkills}
            deleteSkill={deleteSkill}
            createSkill={createSkill}
          />
          <CertificationsInputs
            certifications={certifications}
            changeCertifications={changeCertifications}
            deleteCertification={deleteCertification}
            createCertification={createCertification}
          />
          <ProfileInputs profile={profile} changeProfile={changeProfile} />
          <JobInputs
            experiences={experiences}
            changeExperiences={changeExperiences}
            deleteExperience={deleteExperience}
            createExperience={createExperience}
          />
        </section>

        <section className="resume">
          <Header personalDetails={personalDetails} />
          <section className="resume-body">
            <section className="resume-body-L">
              <Contact personalDetails={personalDetails} />
              <Education education={education} />
              <Skills skills={skills} />
              <Certifications certifications={certifications} />
            </section>
            <section className="resume-body-R">
              <Profile profile={profile} />
              <Experiences experiences={experiences} />
            </section>
          </section>
        </section>
      </main>
      <footer>
        <p className="label">© 2024 Remy Castella. All rights reserved.</p>
      </footer>
    </>
  );
}
