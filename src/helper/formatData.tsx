//format array into arrays have number of columns object into if
//example : columns=3 [[{id:1,name:"1",id:"2",name:"2",id:"3",name:"3"}],[{id:4,name:"4",id:"5",name:"5",id:"6",name:"6"}]]
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
