import TileGrid from '../../components/TileGrid/TileGrid';
import { useApiDataContext } from '../../providers/ApiDataProvider';
import { useSieveContext } from '../../providers/SieveProvider';

import mapShowToTile from './mapShowToTile';

const ShowsList = () => {
  const { error, isFetching } = useApiDataContext();
  const { entries } = useSieveContext();
  const tiles = entries.map(mapShowToTile);

  return (
    <div>
      {isFetching ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>Oops, something went wrong...</p>
      ) : (
        <TileGrid tiles={tiles}></TileGrid>
      )}
    </div>
  );
};

export default ShowsList;
