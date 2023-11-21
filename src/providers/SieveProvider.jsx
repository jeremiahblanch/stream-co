import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useApiDataContext } from './ApiDataProvider';

import { createSorter, createFilterPredicate, sieve } from '../utils/sieving';

const SieveContext = createContext();

const SieveProvider = ({ 
  children,
  filters,
  limit,
  page,
  programType,
  sortField,
  sortOrder,
 }) => {
  const { data } = useApiDataContext();
  const [entries, setEntries] = useState([]);
  const [filterPredicate, setfilterPredicate] = useState();
  const [sorter, setSorter] = useState();

  useEffect(() => {
    const sieveShows = () => {
      if (!filterPredicate || !sorter) {
        return;
      }

      const sievedEntries = sieve({
        entries: data,
        filterPredicate,
        limit,
        page,
        sorter,
      });

      setEntries(sievedEntries);
    };

    sieveShows();
  }, [data, filterPredicate, sorter, limit, page]);

  // If the sort parameters change, update the sorter
  useEffect(() => {
    setSorter(() => createSorter(sortField, sortOrder))
  }, [sortField, sortOrder]);

  // If the fitler paramters change, update the filter predicate
  useEffect(() => {
    setfilterPredicate(() => createFilterPredicate(programType, filters));
  }, [programType, filters]);

  return (
    <SieveContext.Provider value={{ entries }}>
      {children}
    </SieveContext.Provider>
  );
};

SieveProvider.propTypes = {
  children: PropTypes.object.isRequired,
  filters: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  programType: PropTypes.string.isRequired,
  sortField: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
};

const useSieveContext = () => useContext(SieveContext);

export {
  SieveContext,
  SieveProvider,
  useSieveContext,
};
