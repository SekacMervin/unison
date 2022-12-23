
//// Import backages
import { Outlet, Link } from "react-router-dom";
import Styles from "./Styles.scss";

// Icons
import logoInzert from '../Images/logo-inzert.png';
import logoUnison from '../Images/logo-unison.png';
import { Facebook,Instagram,Cash,Cart3,Eyeglasses,PersonRolodex } from 'react-bootstrap-icons'


const Layout = () => {
    return (
      <>
        <div className="header">
          <div className="header-leftSite">
            <Link to="/" className="header-logoLink" title="Unison">
              <img className="header-logoLink" src={logoUnison} alt="Logo unison"/>
            </Link>
            <Link to="/" className="header-logoLink" title="Inzert">
              <img className="header-logoLink" src={logoInzert} alt="Logo inzert"/>
            </Link>
          </div>
          <div style={{width: "30%"}}></div>
          <div className="header-rightSite">
            <ul className="header-rightSite-ul">
              <li className="header-rightSite-li">
                <a className="header-iconLink" href="https://www.facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                  <Facebook className="header-iconFacebook" />
                </a>
              </li>
              <li className="header-rightSite-li">
                <a className="header-iconLink" href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                  <Instagram className="header-iconInstagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar">
          <ul className="navbar-ul">
            <li className="navbar-li">
              <Link className="navbar-li-link" to="/">Home</Link>
            </li>
            <li className="navbar-li">
              <Link className="navbar-li-link" to="/contact">Kontakt</Link>
            </li>
            <li className="navbar-li">
              <Link className="navbar-li-link" to="/price">Cenik inzerce</Link>
            </li>
          </ul>
        </div>
        <div className="mainbody">
            <div className="slidebar">
              <ul className="slidebar-ul">
                <li className="slidebar-li">
                  <Cash></Cash> Prodat inzerat
                </li>
                <li className="slidebar-li">
                  <Cart3></Cart3> Koupit inzerat
                </li>
                <li className="slidebar-li">
                  <Eyeglasses></Eyeglasses> Prohlizet inzerat
                </li>
                <li className="slidebar-li">
                  <PersonRolodex></PersonRolodex> Ruzne
                </li>
              </ul>
            </div>
            <div className="contentBody">
                <Outlet />
            </div>
        </div>  
      </>
    )
  };
  
  export default Layout;