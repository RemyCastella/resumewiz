export default function setNewActiveId(list, currentActiveId, setActiveId) {
  if (list.length === 0) {
    return '';
  }

  if (currentActiveId) {
    setActiveId(list.filter((item) => item.id == !currentActiveId)[0].id);
  }
}
