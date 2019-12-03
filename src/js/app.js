// TODO: write your code here
export default function findBy(fld, val) {
  const field = fld;
  const value = val;
  return function (element) {
    if (element[field].includes(value)) return true;
    return false;
  };
}
