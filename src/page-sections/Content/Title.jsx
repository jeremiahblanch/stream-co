import PropTypes from 'prop-types'

function Title({ text }) {
  return (
    <div className="content__title page-section__outer">
      <h2 className="page-section__inner">{ text }</h2>
    </div>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title
