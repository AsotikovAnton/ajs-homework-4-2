// TODO: write your code here
const findBy = (field, value) => {
  return element => {
    if (element[field].includes(value)) return true;
    return false;
  };
}

export default findBy;
