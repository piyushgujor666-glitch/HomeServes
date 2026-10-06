import { Bell, CalendarDays, Home, Moon, Settings, Sun, Wrench } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/FIX.jpg";
import useTheme from "../../context/theme.jsx";

const navItems = [
  { to: "/home", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Wrench },
  { to: "/bookings", label: "Bookings", icon: CalendarDays },
];

const navClass = ({ isActive }) => `fix-nav-link ${isActive ? "active" : ""}`;

export default function Header() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <>
      <header className="fix-header">
        <div className="fix-container fix-nav">
          <Link to="/home" className="fix-logo" aria-label="FixMate home">
            <img src={logo} alt="FixMate" />
            <span>
              Fix<span className="brand-accent">Mate</span>
            </span>
          </Link>

          <nav className="fix-nav-links" aria-label="Primary navigation">
            {navItems.map(({ to, label }) => (
              <NavLink key={to} to={to} className={navClass}>
                {label}
              </NavLink>
            ))}
            <NavLink to="/profile" className={navClass}>
              Profile
            </NavLink>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              onClick={toggleTheme}
              className="icon-btn"
              aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
            >
              {themeMode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link
              to="/notifications"
              className="icon-btn notification-button"
              aria-label="Notifications"
              title="Notifications"
            >
              <Bell size={18} />
              <span>2</span>
            </Link>

            <Link to="/profile" className="profile-chip">
              <span className="profile-avatar">P</span>
              <span className="profile-name">Piyush</span>
            </Link>
          </div>
        </div>
      </header>

      <nav className="fix-mobile-nav" aria-label="Mobile navigation">
        <NavLink to="/home">
          <Home size={16} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/services">
          <Wrench size={16} />
          <span>Services</span>
        </NavLink>
        <NavLink to="/book-service">
          <span style={{ fontSize: 20, lineHeight: 1 }}>+</span>
          <span>Book</span>
        </NavLink>
        <NavLink to="/bookings">
          <CalendarDays size={16} />
          <span>Bookings</span>
        </NavLink>
        <NavLink to="/notifications">
          <Bell size={16} />
          <span>Alerts</span>
        </NavLink>
        <NavLink to="/profile">
          <Settings size={16} />
          <span>Profile</span>
        </NavLink>
      </nav>
    </>
  );
}
