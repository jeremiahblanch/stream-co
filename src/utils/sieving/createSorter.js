export default (field, order) => (recordOne, recordTwo) => {
  const isDescending = order === 'desc';
  const recordOneValue = recordOne[field];
  const recordTwoValue = recordTwo[field];
    
  if (recordOneValue > recordTwoValue) {
    return isDescending ? -1 : 1;
  }

  return isDescending ? 1 : -1;
}