export default function getActiveItem(list, activeId) {
  if (list.length === 0) {
    return {
      institution: '',
      degree: '',
      dates: '',
    };
  }
  const array = list.filter((item) => item.id === activeId);
  return array[0];
}
