import Sidebar from "../Sidebar/sidebar";
import Topbar from "../Topbar/topbar";

const Layout = ({ title, children }) => {
  const layoutStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "240px auto",
  };
  return (
    <>
      <Topbar />
      <div style={layoutStyle}>
        <Sidebar active={title} />
        {children}
      </div>
    </>
  );
};
export default Layout;
