import Style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

export default function Navbar(){

    return (
      <>
        <nav className={`${Style.nav} py-4 fixed-top navbar navbar-expand-lg bg-body-tertiary`}>
          <div className={`${Style.container} container container-fluid `}>
            <a className="navbar-brand text-uppercase fs-2 fw-bolder text-white" href="#">
              Start Framework
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="about"  className= "nav-link mx-2  text-white fw-bold text-uppercase "aria-current="page" href="#">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link mx-2 text-white fw-bold text-uppercase" to="portfolio" href="#">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link mx-2 text-white fw-bold text-uppercase" to="contact" href="#">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}