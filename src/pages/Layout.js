
//// Import backages
import { Outlet, Link } from "react-router-dom";
import LayoutStyles from "./Layout.css";


const Layout = () => {
    return (
      <>
        <div className="header">
            <h1>Nadpis</h1>
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