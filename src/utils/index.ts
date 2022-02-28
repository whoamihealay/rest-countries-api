// Input an Array of objects without an index ID
// Output with ids
export const addIds = (array: any[]) => {
  let id = 0;
  const newArray: any[] = [];
  array.forEach((item) => {
    item.id = id;
    newArray[item.id] = item;
    id += 1;
  });
  return newArray;
};
