import PropTypes from 'prop-types'

import Title from './Title';
import '../PageSection.css';
import './Content.css';

function Content({ title, children}) {
  return (
      <>
        <Title text={title}></Title>
        <div className="content__outer page-section__outer">
          <div className="content__inner page-section__inner">
            { children }
          </div>
        </div>
      </>
  )
}

Content.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default Content
