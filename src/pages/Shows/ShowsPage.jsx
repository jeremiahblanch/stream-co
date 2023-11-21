import { useState } from 'react';
import PropTypes from 'prop-types'

import { SieveProvider } from '../../providers/SieveProvider';
import Content from '../../page-sections/Content/Content';

import ShowsList from './ShowsList';

const programTypeConfig = {
  'movie': {
    pageTitle: 'Popular Movies',
  },
  'series': {
    pageTitle: 'Popular Series',
  }
};

const ShowsPage = ({ programType }) => {
  const config = programTypeConfig[programType];

  const [filters] = useState([{ field: 'releaseYear', comparison: 'gte', value: 2010}]);
  const [limit] = useState(21);
  const [page] = useState(1);
  const [sortField] = useState('title');
  const [sortOrder] = useState('asc');

  return (
    <Content title={config.pageTitle}>
      <SieveProvider
        programType={programType}
        filters={filters}
        limit={limit}
        page={page}
        sortField={sortField}
        sortOrder={sortOrder}
      >
        <ShowsList />
      </SieveProvider>
    </Content>
  );
};

ShowsPage.propTypes = {
  programType: PropTypes.string.isRequired,
}

export default ShowsPage;
