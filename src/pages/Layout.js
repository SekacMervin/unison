
//// Import backages
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import styles from "../Styles/Styles.scss";

// Icons
import { Facebook,Instagram,Cash,Cart3,PersonRolodex,
          Search, ClipboardPlus} from 'react-bootstrap-icons'




//// Return Layout
const Layout = () => {

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
          <div className="navigationbar-right">
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
                    <Link className="mobile-sidebar-li-link" to="/addInzert">
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
                    <Link className="mobile-sidebar-li-link" to="/sale">
                        <Cash className="mobile-sidebar-li-link-icon"></Cash>Prodej
                    </Link>
                  </li>
                  <li className="mobile-sidebar-li">
                    <Link className="mobile-sidebar-li-link" to="/buy">
                        <Cart3 className="mobile-sidebar-li-link-icon"></Cart3>Koupe
                    </Link>
                  </li>
                  <li className="mobile-sidebar-li">
                    <Link className="mobile-sidebar-li-link" to="/others">
                        <PersonRolodex className="mobile-sidebar-li-link-icon"></PersonRolodex>Ruzne
                    </Link>
                  </li>
                  <li className="mobile-sidebar-li">
                    <Link className="mobile-sidebar-li-link" to="/search">
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
                  <Link className="sidebar-li-link" to="/addInzert">
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
                  <Link className="sidebar-li-link" to="/sale">
                    <div style={{display: "flex"}}>
                      <Cash className="sidebar-li-link-icon"></Cash><div className="slidebar-text"> Prodej</div>
                    </div>
                  </Link>
                </li>
                <li className="sidebar-li">
                  <Link className="sidebar-li-link" to="/buy">
                    <div style={{display: "flex"}}>
                      <Cart3 className="sidebar-li-link-icon"></Cart3><div className="slidebar-text"> Koupe</div>
                    </div>
                  </Link>
                </li>
                <li className="sidebar-li">
                  <Link className="sidebar-li-link" to="/others">
                    <div style={{display: "flex"}}>
                      <PersonRolodex className="sidebar-li-link-icon"></PersonRolodex><div className="slidebar-text"> Ruzne</div>
                    </div>
                  </Link>
                </li>
                <li className="sidebar-li">
                  <Link className="sidebar-li-link" to="/search">
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
      </>
    )
  };

  export default Layout;