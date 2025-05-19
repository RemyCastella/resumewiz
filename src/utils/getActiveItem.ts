// import { EducationData, CertificationData, SkillData, ExperienceData } from "../types/categories.js"

// export default function getActiveItem(list: EducationData[] | CertificationData[] | SkillData[] | ExperienceData[] , activeId: number | string): EducationData | CertificationData | SkillData | ExperienceData {

//   if (list.length === 0) {
//     return {
//       id: "empty-list",
//       institution: '',
//       degree: '',
//       dates: '',
//     };
//   }
//   const array = list.filter((item) => item.id === activeId);
//   return array[0];
// }

export default function getActiveItem<
  T extends { id: number | string }
>(
  list: T[],
  activeId: T["id"],
  defaultValue: T
): T {
  return list.find(item => item.id === activeId) ?? defaultValue
}
