import PropTypes from 'prop-types'
import Tile from '../Tile/Tile'
import './TileGrid.css'

function TileGrid({ tiles }) {
  return (
    <div className='tile-grid'>
      {tiles.map(tile => <Tile key={tile.id || tile.href} {...tile}></Tile>)}
    </div>
  )
}

TileGrid.propTypes = {
  tiles: PropTypes.array.isRequired,
}

export default TileGrid
