
//// Import backages
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import styles from "../Styles/Styles.scss";

// Icons
import { Facebook,Instagram,Cash,Cart3,PersonRolodex,
          Search, ClipboardPlus} from 'react-bootstrap-icons'
import { minHeight } from "@mui/system";




//// Return Layout
const Layout = () => {
    
    // Get screen height
    const screenHeight = window.screen.height;

    // Ziskani aktivni stranky
    const location = useLocation();

    // Pro slidebar
    const [sidebar, setSidebar] = useState("sidebar");
    const [navigationEmpty, setNavigationEmpty] = useState("navigationbar-left-empty");

    // Pro mobile-slidebar
    const [mobileSidebar, setMobileSidebar] = useState("mobile-sidebar");
    const [mobileNavigationbar, setMobileNavigationbar] = useState("mobile-navigationbar");

    // Funkce meni Slidebar 
    const ChangeSidebar = () =>
    {
      if(sidebar === "sidebar")
      {
        setNavigationEmpty("navigationbar-left-empty-sidebar-short");
        setSidebar("sidebar-short");
      }
      else
      {
        setSidebar("sidebar");
        setNavigationEmpty("navigationbar-left-empty");
      }
    }

    // Funkce meni mobile sidebar
    const ChangeMobileSidebar = () =>
    {
      if(mobileSidebar === "mobile-sidebar")
      {
        setMobileNavigationbar("mobile-navigationbar-open");
        setMobileSidebar("mobile-sidebar-open");
      }
      else
      {
        setMobileNavigationbar("mobile-navigationbar");
        setMobileSidebar("mobile-sidebar");
      }
    }

    return (
      <div>
        <div className="header">
          <div className="header-leftSite">
            <h2>UNISON</h2>
          </div>
          <div className="header-rightSite">
            <ul className="header-rightSite-ul">
              <li className="header-rightSite-li">
                <a className="header-rightSite-iconLink" href="https://www.facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                  <Facebook className="header-rightSite-iconFacebook" />
                </a>
              </li>
              <li className="header-rightSite-li">
                <a className="header-rightSite-iconLink" href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                  <Instagram className="header-rightSite-iconInstagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navigationbar">
          <div className={navigationEmpty}></div>
          <div className="navigationbar-center">
            <ul className="navigationbar-center-ul">
              <li className="navigationbar-center-li">
                <Link className={location.pathname === "/" ? "navigationbar-center-li-link-active" : "navigationbar-center-li-link-left"} to="/">Home</Link>
              </li>
              <li className="navigationbar-center-li">
                <Link className={location.pathname === "/price" ? "navigationbar-center-li-link-active" : "navigationbar-center-li-link"} to="/price">Ceník</Link>
              </li>
              <li className="navigationbar-center-li">
                <Link className={location.pathname === "/contact" ? "navigationbar-center-li-link-active" : "navigationbar-center-li-link"} to="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={mobileNavigationbar}>
          <div className="mobile-navigationbar-flex-end">
            <div className="mobile-navigationbar-menuIcon" onClick={() => ChangeMobileSidebar()}>
              <div class="mobile-bar1"></div>
              <div class="mobile-bar2"></div>
              <div class="mobile-bar3"></div>
            </div>
          </div>
          <div className={mobileSidebar}>
            <hr></hr>
            <div className="mobile-sidebar-flex">
              <div style={{width: "170px"}}>
                <h4>
                  Pridani inzeratu
                </h4>
                <ul className="mobile-sidebar-ul">
                  <li className="mobile-sidebar-li">
                    <Link className={location.pathname === "/addInzert" ? "mobile-sidebar-li-link-active" : "mobile-sidebar-li-link"} to="/addInzert">
                        <ClipboardPlus className="mobile-sidebar-li-link-icon"></ClipboardPlus>Vytvorit
                    </Link>
                  </li>
                </ul>
              </div>
              <div style={{width: "170px"}}>
                <h4>
                  Prohlizeni inzeratu
                </h4>
                <ul className="mobile-sidebar-ul">
                  <li className="mobile-sidebar-li">
                    <Link className={location.pathname === "/sale" ? "mobile-sidebar-li-link-active" : "mobile-sidebar-li-link"} to="/sale">
                        <Cash className="mobile-sidebar-li-link-icon"></Cash>Prodej
                    </Link>
                  </li>
                  <li className="mobile-sidebar-li">
                    <Link className={location.pathname === "/buy" ? "mobile-sidebar-li-link-active" : "mobile-sidebar-li-link"} to="/buy">
                        <Cart3 className="mobile-sidebar-li-link-icon"></Cart3>Koupe
                    </Link>
                  </li>
                  <li className="mobile-sidebar-li">
                    <Link className={location.pathname === "/others" ? "mobile-sidebar-li-link-active" : "mobile-sidebar-li-link"}to="/others">
                        <PersonRolodex className="mobile-sidebar-li-link-icon"></PersonRolodex>Ruzne
                    </Link>
                  </li>
                  <li className="mobile-sidebar-li">
                    <Link className={location.pathname === "/search" ? "mobile-sidebar-li-link-active" : "mobile-sidebar-li-link"} to="/search">
                        <Search className="mobile-sidebar-li-link-icon"></Search>Hledat
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
                  <Link className={location.pathname === "/addInzert" ? "sidebar-li-link-active" : "sidebar-li-link"} to="/addInzert">
                    <div style={{display: "flex"}}>
                      <ClipboardPlus className="sidebar-li-link-icon"></ClipboardPlus><div className="slidebar-text"> Vytvorit </div>
                    </div>
                  </Link>
                </li>
              </ul>
              <h4>
                  Prohlizeni inzeratu
              </h4>
              <ul className="sidebar-ul">
                <li className="sidebar-li">
                  <Link className={location.pathname === "/sale" ? "sidebar-li-link-active" : "sidebar-li-link"} to="/sale">
                    <div style={{display: "flex"}}>
                      <Cash className="sidebar-li-link-icon"></Cash><div className="slidebar-text"> Prodej</div>
                    </div>
                  </Link>
                </li>
                <li className="sidebar-li">
                  <Link className={location.pathname === "/buy" ? "sidebar-li-link-active" : "sidebar-li-link"} to="/buy">
                    <div style={{display: "flex"}}>
                      <Cart3 className="sidebar-li-link-icon"></Cart3><div className="slidebar-text"> Koupe</div>
                    </div>
                  </Link>
                </li>
                <li className="sidebar-li">
                  <Link className={location.pathname === "/others" ? "sidebar-li-link-active" : "sidebar-li-link"} to="/others">
                    <div style={{display: "flex"}}>
                      <PersonRolodex className="sidebar-li-link-icon"></PersonRolodex><div className="slidebar-text"> Ruzne</div>
                    </div>
                  </Link>
                </li>
                <li className="sidebar-li">
                  <Link className={location.pathname === "/search" ? "sidebar-li-link-active" : "sidebar-li-link"} to="/search">
                    <div style={{display: "flex"}}>
                      <Search className="sidebar-li-link-icon"></Search><div className="slidebar-text"> Hledat</div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contentBody" id="contentBody">
              <Outlet />
            </div>
        </div>
      </div>
    )
  };

  export default Layout;