
//// Import backages
import { Outlet, Link } from "react-router-dom";
import Styles from "./Styles.scss";

// Icons
import logoInzert from '../Images/logo-inzert.png';
import logoUnison from '../Images/logo-unison.png';
import { Facebook } from 'react-bootstrap-icons'
import { Instagram } from "react-bootstrap-icons";


const Layout = () => {
    return (
      <>
        <div className="header">
          <div className="leftSite">
            <Link to="/" className="logoLink" title="Unison">
              <img className="logoImg" src={logoUnison} alt="Logo unison"/>
            </Link>
            <Link to="/" className="logoLink" title="Inzert">
              <img className="logoImg" src={logoInzert} alt="Logo inzert"/>
            </Link>
          </div>
          <div className="middleSite">
            <h2>INZERTNÍ NOVINY DO KAŽDÉ RODINY</h2>
          </div>
          <div className="rightSite">
            <a className="iconLink" href="https://www.facebook.com" target="_blank" rel="noreferrer" title="Facebook">
              <Facebook className="iconFacebook" />
            </a>
            <a className="iconLink" href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram">
              <Instagram className="iconInstagram" />
            </a>
          </div>
        </div>
        <div className="mainbody">
            <div className="slidebar">
            </div>
            <div className="contentBody">
                <Outlet />
            </div>
        </div>  
      </>
    )
  };
  
  export default Layout;