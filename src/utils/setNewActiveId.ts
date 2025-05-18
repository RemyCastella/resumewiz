// export default function setNewActiveId(list, currentActiveId, setActiveId) {
//   if (list.length === 0) {
//     return '';
//   }

//   if (currentActiveId) {
//     setActiveId(list.filter((item) => item.id == !currentActiveId)[0].id);
//   }
// }

export default function setNewActiveId<
  T extends { id: number | string }
>(
  list: T[],
  currentActiveId: T["id"],
  setActiveId: (id: T["id"]) => void
): T["id"] | "" {
  if(list.length === 0) return ""

  const nextItem = list.find(item => item.id !== currentActiveId)

  if(nextItem){
    setActiveId(nextItem.id)
    return nextItem.id
  }

  return ""
}
