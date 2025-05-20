export interface PersonalData {
  fullName: string,
  jobTitle: string,
  email: string,
  tel: string,
  website: string
}

export interface EducationData {
  id: string,
  institution: string,
  degree: string,
  dates: string
}

export interface SkillData {
  id: string,
  skill: string
}

export interface CertificationData {
  id: string,
  certification: string
}

export type ProfileData = string

export interface ExperienceData {
  id: string,
  title: string,
  description: string,
  organization: string,
  dates: string,
}
