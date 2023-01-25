export const formatData = (
  response: object[],
  columns: number,
  result: object[],
): object[] => {
  const temp = [...response]
  if (columns <= 0) return result
  while (temp.length) result.push(temp.splice(0, columns))
  return result
}
