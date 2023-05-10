
//// Import backages
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import styles from "../Styles/Styles.scss";

// Icons
import { Facebook,Instagram,Cash,Cart3,PersonRolodex,
          Search, ClipboardPlus} from 'react-bootstrap-icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';




//// Return Layout
const Layout = (prop) => 
{
  // Ziskani aktivni stranky
  const location = useLocation();

  const [user,setUser] = useState();

  // Pro slidebar
  const [sidebar, setSidebar] = useState("sidebar");

  // Pro mobile-slidebar
  const [mobileSidebar, setMobileSidebar] = useState("mobile-sidebar");
  const [mobileNavigationbar, setMobileNavigationbar] = useState("mobile-navigationbar");

  // Funkce meni Slidebar 
  const ChangeSidebar = () =>
  {
    if(sidebar === "sidebar")
    {
      let navigationbarLeftElemet = document.getElementById("navigationbar-left");
      setSidebar("sidebar-short");
      navigationbarLeftElemet.style.minWidth = "77px";
      navigationbarLeftElemet.style.width = "77px";
    }
    else
    {
      let navigationbarLeftElemet = document.getElementById("navigationbar-left");
      setSidebar("sidebar");
      navigationbarLeftElemet.style.minWidth = "257px";
      navigationbarLeftElemet.style.width = "257px";
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
        <div className="header-left">
          <h2>UNISON {prop.user}</h2>
        </div>
        <div className="header-right">
          <ul className="header-right-ul">
            <li className="header-right-li">
              <a className="header-right-iconLink" href="https://www.facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                <Facebook className="header-right-iconFacebook" />
              </a>
            </li>
            <li className="header-right-li">
              <a className="header-right-iconLink" href="https://www.instagram.com" target="_blank" rel="noreferrer" title="Instagram">
                <Instagram className="header-right-iconInstagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navigationbar">
        <div id="navigationbar-left" className="navigationbar-left"></div>
        <div className="navigationbar-container">
          <div className="navigationbar-container-left">
            <ul className="navigationbar-container-left-ul">
              <li className="navigationbar-container-left-li">
                <Link className={location.pathname === "/" ? "navigationbar-container-left-li-link-active" : "navigationbar-container-left-li-link-left"} to="/">Home</Link>
              </li>
              <li className="navigationbar-container-left-li">
                <Link className={location.pathname === "/price" ? "navigationbar-container-left-li-link-active" : "navigationbar-container-left-li-link"} to="/price">Ceník</Link>
              </li>
              <li className="navigationbar-container-left-li">
                <Link className={location.pathname === "/contact" ? "navigationbar-container-left-li-link-active" : "navigationbar-container-left-li-link"} to="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div className="navigationbar-container-right">
            <div className="navigationbar-container-right-loggin">
              <Button variant="outlined" size="large" endIcon={<AccountCircleIcon />}>
                Prihlasit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={mobileNavigationbar}>
        <div className="mobile-navigationbar-head">
          <div className="mobile-navigationbar-head-button" onClick={() => ChangeMobileSidebar()}>
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
    </>
  )
};


export default Layout;