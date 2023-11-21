import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Tile.css';

function Tile({ title, href, image }) {
  return (
    <Link 
      className="tile"
      to={href}
    >
        <img
          alt=""
          className="tile__img"
          loading="lazy"
          src={image.url}
          height="201"
          width="134"
          />
        <p>{ title }</p>
    </Link>
  )
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired
}

export default Tile
