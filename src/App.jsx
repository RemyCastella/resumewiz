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
import { IoSparkles } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: 'Remy Castella',
    jobTitle: 'Web Developer',
    tel: '080-7178-9696',
    email: 'remy.jpen@gmail.com',
    website: 'https://github.com/RemyCastella',
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

  function changeEducation(event, activeId) {
    const { name, value } = event.target;
    setEducation((prevEducation) =>
      prevEducation.map((item) => {
        return item.id === activeId ? { ...item, [name]: value } : item;
      })
    );
  }

  function deleteEducation(activeId) {
    setEducation((prevEducation) =>
      prevEducation.filter((item) => item.id !== activeId)
    );
  }

  function createEducation(id) {
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

  const [skills, setSkills] = useState([
    { id: uuidv4(), skill: 'HTML' },
    { id: uuidv4(), skill: 'CSS' },
    { id: uuidv4(), skill: 'JavaScript' },
    { id: uuidv4(), skill: 'React' },
  ]);

  function changeSkills(event, activeId) {
    const { name, value } = event.target;
    setSkills((prevSkills) =>
      prevSkills.map((item) => {
        return item.id === activeId ? { ...item, [name]: value } : item;
      })
    );
  }

  function deleteSkill(activeId) {
    setSkills((prevSkills) =>
      prevSkills.filter((item) => item.id !== activeId)
    );
  }

  function createSkill(id) {
    setSkills((prevSkills) => [
      ...prevSkills,
      {
        id: id,
        skill: '',
      },
    ]);
  }

  const [certifications, setCertifications] = useState([
    { id: 0, certification: 'JLPT N1' },
    { id: 1, certification: '二級翻訳士' },
  ]);

  function changeCertifications(event, activeId) {
    const { name, value } = event.target;
    setCertifications((prevSkills) =>
      prevSkills.map((item) => {
        return item.id === activeId ? { ...item, [name]: value } : item;
      })
    );
  }

  function deleteCertification(activeId) {
    setCertifications((prevCerts) =>
      prevCerts.filter((item) => item.id !== activeId)
    );
  }

  function createCertification(id) {
    setCertifications((prevCert) => [
      ...prevCert,
      {
        id: id,
        certification: '',
      },
    ]);
  }

  const [profile, setProfile] = useState(
    'I am an aspiring web developer based in Hokkaido, Japan.'
  );

  function changeProfile(event) {
    const { value } = event.target;
    setProfile(value);
  }

  const [experiences, setExperiences] = useState([
    {
      id: 0,
      title: 'Translator',
      organization: 'Freelance',
      dates: 'September 2021-Present',
      description:
        'I mainly translate web content for major Japanese firms. I also have a book published.',
    },
    {
      id: 1,
      title: 'Translator',
      organization: 'Routing Systems Inc.',
      dates: 'September 2021-May 2023',
      description: `Translated the entire website and app of one of Japan's largest English learning services.`,
    },
    {
      id: 1,
      title: 'English Teacher',
      organization: 'Trygroup Inc.',
      dates: 'January 2020-October 2020',
      description: `Taught English to children, from infants to teenagers, at one of Tokyo's most popular English schools.`,
    },
  ]);

  function changeExperiences(event, activeId) {
    const { name, value } = event.target;
    setExperiences((prevExperiences) =>
      prevExperiences.map((item) => {
        return item.id === activeId ? { ...item, [name]: value } : item;
      })
    );
  }

  function deleteExperience(activeId) {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((item) => item.id !== activeId)
    );
  }

  function createExperience(id) {
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
