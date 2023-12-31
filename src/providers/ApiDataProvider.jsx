import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import api from '../utils/api';

const ApiDataContext = createContext();

const ApiDataProvider = ({
  afterFetch,
  children,
  needFreshData,
  url,
 }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  
  useEffect(() => {
    const fetchFromApi = async () => {
      setError(null);
      setIsFetching(true);

      try {  
        const { entries } = await api.get(url);

        setData(entries);
      } catch (e) {
        setData([]);
        setError(e);
      }

      setIsFetching(false);
      afterFetch();
    };

    if (needFreshData && !isFetching) {
      fetchFromApi();
    }
  }, [afterFetch, isFetching, needFreshData, url]);

  return (
    <ApiDataContext.Provider value={{ data, error, isFetching }}>
      {children}
    </ApiDataContext.Provider>
  );
};

ApiDataProvider.propTypes = {
  afterFetch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  needFreshData:PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
}

const useApiDataContext = () => useContext(ApiDataContext);

export {
  ApiDataContext,
  ApiDataProvider,
  useApiDataContext,
}