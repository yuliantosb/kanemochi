import "./BaseLayout.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import SidebarCollapsed from "../Sidebar/SidebarCollapsed";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { Transition } from "react-transition-group";

const transitionStyles = {
  entering: { marginLeft: -300 },
  entered: { marginLeft: 0 },
  exiting: { marginLeft: -300 },
  exited: { marginLeft: -300 },
};

function BaseLayout({ children }) {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="kelola-layout">
      <Sidebar toggle={handleToggle} />
      <div className="kelola-navbar-sidebar-wrapper">
        <Navbar />
        <div className="kelola-sidebar-collapsed">
          <Transition in={collapsed} timeout={100} appear unmountOnExit>
            {(state) => <SidebarCollapsed style={transitionStyles[state]} />}
          </Transition>

          <div className="kelola-content">
            {children}
            <div className="kelola-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseLayout;
