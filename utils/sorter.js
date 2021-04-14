export const sorter = (a, b) => {
  if (a.createdAt === b.createdAt)
    return a.fileTimestamp > b.fileTimestamp ? -1 : 1
  return a.createdAt > b.createdAt ? -1 : 1
}
