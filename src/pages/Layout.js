
//// Import backages
import { Outlet, Link } from "react-router-dom";
import Styles from "../Styles/Styles.scss";

// Icons
import { Facebook,Instagram,Cash,Cart3,PersonRolodex,
          Search, ClipboardPlus} from 'react-bootstrap-icons'


const Layout = () => {
    return (
      <>
        <div className="header">
          <div className="header-leftSite">
            <h2>UNISON</h2>
          </div>
          
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
                  <Link className="slidebar-li-link" to="/addInzert">
                    <ClipboardPlus className="slidebar-li-link-icon"></ClipboardPlus> Podat inzerat
                  </Link>
                </li>
              </ul>
              <h4>
                  Prohlizeni inzeratu
              </h4>
              <ul className="slidebar-ul" style={{marginTop: "5px"}}>
                <li className="slidebar-li">
                  <Link className="slidebar-li-link" to="/sale">
                    <Cash className="slidebar-li-link-icon"></Cash> Prodej
                  </Link>
                </li>
                <li className="slidebar-li">
                  <Link className="slidebar-li-link" to="/buy">
                    <Cart3 className="slidebar-li-link-icon"></Cart3> Koupe
                  </Link>
                </li>
                <li className="slidebar-li">
                  <Link className="slidebar-li-link" to="/others">
                    <PersonRolodex className="slidebar-li-link-icon"></PersonRolodex> Ruzne
                  </Link>
                </li>
                <li className="slidebar-li">
                  <Link className="slidebar-li-link" to="/search">
                    <Search className="slidebar-li-link-icon"></Search> Hledat
                  </Link>
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