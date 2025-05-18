interface PersonalData {
  fullName: string,
  jobTitle: string,
  email: string,
  tel: string,
  website: string
}

interface EducationData {
  id: string,
  institution: string,
  degree: string,
  dates: string
}

interface SkillData {
  id: string,
  skill: string
}

interface CertificationData {
  id: number,
  certification: string
}

type ProfileData = string

interface ExperienceData {
  id: number,
  title: string,
  description: string,
  organization: string,
  dates: string,
}
