export default ({ 
  entries = [],
  filterPredicate,
  limit,
  page = 1,
  sorter,
  
}) => {
  if (!entries.length) { // save some work if we have an empty list
    return entries;
  }

  const filteredEntries = entries.filter(filterPredicate);
  const sortedEntries = filteredEntries.sort(sorter);
  const pageStartIndex = (page - 1) * limit;
  const pageOfEntries = sortedEntries.slice(pageStartIndex, pageStartIndex + limit);

  return pageOfEntries;
};