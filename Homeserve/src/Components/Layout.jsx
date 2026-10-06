import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
export default function Layout({ children }) { return <div className="fix-page"><Header/><main>{children}</main><Footer/></div>; }
