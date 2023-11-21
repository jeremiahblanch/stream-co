import TileGrid from '../../components/TileGrid/TileGrid';
import { useSieveContext } from '../../providers/SieveProvider';

import mapShowToTile from './mapShowToTile';

const ShowsList = () => {
  const { entries, error } = useSieveContext();
  const tiles = entries.map(mapShowToTile);

  return (
    <div>
      {error ? (
        <p>Oops, something went wrong...</p>
      ) : tiles.length ? (
        <TileGrid tiles={tiles}></TileGrid>
      ): (
        <p>Loading ...</p>
      )}
    </div>
  );
};

export default ShowsList;
