import { Link } from 'react-router-dom'

import '../PageSection.css';
import './Header.css';

function Header() {
  const handleClickLogin = ()  => {};
  const handleClickStartTrial = ()  => {};

  return (
    <header className="page-section__outer">
      <div className="header__inner page-section__inner">
        <Link to="/" className="header-title">
          <h1>DEMO Streaming</h1>
        </Link>

        <div className="header__controls">
          <button
            className="header__button header__button--transparent"
            onClick={handleClickLogin}
            >
            Log In
          </button>

          <button
            className="header__button"
            onClick={handleClickStartTrial}
            >
            Start your free trial
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
