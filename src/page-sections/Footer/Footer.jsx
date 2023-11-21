import '../PageSection.css';
import './Footer.css';

import links from './content/links';
import socials from './content/socials';
import stores from './content/stores';

function Footer() {
  return (
    <footer className="page-section__outer">
      <div className="footer__inner page-section__inner">
        <ul className="footer-links">
         {links.map(({ href, label })=> (
              <li 
                className="footer-links__li"
                key={href}
              >
                <a
                  className="footer-links__link"
                  href={href}
                >
                { label }
                </a>
              </li>
            ))}
        </ul>
        <p className='footer__copyright'>
          Copyright &copy; 2016 DEMO Streaming All Rights Reserved
        </p>

        <div className="footer__row">

          <ul className="footer-socials">
            {socials.map(({ img, href, ariaLabel })=> (
              <li key={href}>
                <a
                  aria-label={ariaLabel}
                  className="footer-socials__link"
                  href={href}
                >
                  <img
                    className="footer-socials__link-img" 
                    src={'/assets/social/' + img.src}
                    height={img.height}
                    width={img.width}
                  />
                </a>
              </li>
            ))}
          </ul>

          <ul className="footer-stores">
            {stores.map(({ img, href, ariaLabel })=> (
              <li key={href}>
                <a
                  aria-label={ariaLabel}
                  className="footer-stores__link"
                  href={href}
                >
                  <img
                    className="footer-stores__link-img" 
                    src={'/assets/store/' + img.src}
                    height={img.height}
                    width={img.width}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
