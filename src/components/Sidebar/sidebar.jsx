import DashboardIcon from "../../assets/icons/DashboardIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import "../../styles/sidebar.css";
import {Link, useNavigate} from "react-router-dom"
import Cookies from 'js-cookie'

const Sidebar = ({ active = "" }) => {
  const navigate = useNavigate()
  const links = [
    {
      icon: <DashboardIcon />,
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <ProfileIcon />,
      title: "Profile",
      path: "/profile",
    },
  ];

  const handleLogout = () => {
    Cookies.remove('Profile')
    navigate('/')
  }

  return (
    <div className="sidebar">
      {links.map((item) => (
        <Link
          key={item.title}
          to={item.path}
          className={`sidebar-links ${active === item.title && "active"}`}
        >
          {item.icon}
          <p>{item.title}</p>
        </Link>
      ))}

      <button className="mt-20" onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Sidebar;
