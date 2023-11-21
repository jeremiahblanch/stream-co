export default (programType, filters) => {
  // take the given array filters, and create an array of separate predicate functions, allChecks.

  const allChecks = filters.map(({field, value, comparison }) => {
    const checkForThisFilter = (record) => {
      const recordFieldValue = record[field];
      
      switch (comparison) {
        case 'lte':
          return recordFieldValue <= value;
        case 'gte':
          return recordFieldValue >= value;

        // TODO less than, greater than
      }

      return recordFieldValue === value;

    };

    return checkForThisFilter;
  });

  // add, as the first check, a check on programType
  allChecks.unshift((record) => record.programType === programType);

  // return a function that takes a record and runs every check
  // Array.every will stop on the first failure.
  return (record) => allChecks.every((check) => check(record));
}