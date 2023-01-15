
//// Import backages
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import styles from "../Styles/Styles.scss";

// Icons
import { Facebook,Instagram,Cash,Cart3,PersonRolodex,
          Search, ClipboardPlus} from 'react-bootstrap-icons'




//// Return Layout
const Layout = () => {
    const [sidebar, setSidebar] = useState("sidebar");
    const [navigationEmpty, setNavigationEmpty] = useState("navigationbar-left-empty");

    // Funkce meni Slidebar 
    const ChangeSidebar = () =>
    {
      // Normal sidebar
      if(sidebar === "sidebar")
      {
        setSidebar("sidebar-closed");
        setNavigationEmpty("navigationbar-left-empty-sidebar-closed");
      }
      else
      {
        setSidebar("sidebar");
        setNavigationEmpty("navigationbar-left-empty");
      }
    }

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
        <div className="navigationbar">
          <div className={navigationEmpty}></div>
          <ul className="navigationbar-ul">
            <li className="navigationbar-li">
              <Link className="navigationbar-li-link" to="/">Home</Link>
            </li>
            <li className="navigationbar-li">
              <Link className="navigationbar-li-link" to="/price">Cenik inzerce</Link>
            </li>
            <li className="navigationbar-li">
              <Link className="navigationbar-li-link" to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="mobile-navigationbar">
          <div className="mobile-navigationbar-menuIcon">
              <div class="mobile-bar1"></div>
              <div class="mobile-bar2"></div>
              <div class="mobile-bar3"></div>
            </div>
        </div>
        <div className="mobile-sidebar">
          kuk
        </div>
        <div className="mainbody">
            <div className={sidebar}  id="sidebar">
              <div className="sidebar-head">
                <div className="sidebar-head-menuIcon" onClick={() => ChangeSidebar()}>
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
                </div>
              </div>
              <h4>
                  Pridani inzeratu
              </h4>
              <ul className="sidebar-ul">
                <li className="sidebar-li">
                  <Link className="sidebar-li-link" to="/addInzert">
                    <ClipboardPlus className="sidebar-li-link-icon"></ClipboardPlus> Vytvorit
                  </Link>
                </li>
              </ul>
              <h4>
                  Prohlizeni inzeratu
              </h4>
              <ul className="sidebar-ul">
                <li className="sidebar-li">
                  <Link className="sidebar-li-link" to="/sale">
                    <Cash className="sidebar-li-link-icon"></Cash> Prodej
                  </Link>
                </li>
                <li className="sidebar-li">
                  <Link className="sidebar-li-link" to="/buy">
                    <Cart3 className="sidebar-li-link-icon"></Cart3> Koupe
                  </Link>
                </li>
                <li className="sidebar-li">
                  <Link className="sidebar-li-link" to="/others">
                    <PersonRolodex className="sidebar-li-link-icon"></PersonRolodex> Ruzne
                  </Link>
                </li>
                <li className="sidebar-li">
                  <Link className="sidebar-li-link" to="/search">
                    <Search className="sidebar-li-link-icon"></Search> Hledat
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