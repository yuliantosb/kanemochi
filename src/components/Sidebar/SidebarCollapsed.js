import { useState } from "react";
import "./SidebarCollapsed.css";
import { Transition } from "react-transition-group";

const childrenTransitionStyle = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function SidebarCollapsed({ style }) {
  const [childrenOpen, setChildrenOpen] = useState([
    {
      id: 1,
      open: true,
    },
    {
      id: 2,
      open: true,
    },
  ]);

  const handleOpenChildren = (id) => {
    const newChildren = [...childrenOpen];
    const findChildren = newChildren.find((child) => child.id === id);
    if (findChildren) {
      findChildren.open = !findChildren.open;
      setChildrenOpen(newChildren);
    } else {
      setChildrenOpen([
        ...childrenOpen,
        {
          id,
          open: true,
        },
      ]);
    }
  };

  return (
    <div className="kelola-sidebar-collapsed-content" style={style}>
      <span className="kelola-menu-title">Master Menu</span>
      <ul>
        <li
          className={`kelola-menu-has-children ${
            childrenOpen.find((children) => children.id === 1).open
              ? "kelola-menu-has-children-active"
              : ""
          }`}
          onClick={() => handleOpenChildren(1)}
        >
          <span>User Management</span>
          <Transition
            key="1"
            in={childrenOpen.find((children) => children.id === 1).open}
            timeout={100}
            appear
            unmountOnExit
          >
            {(state) => (
              <ul
                className="kelola-menu-children"
                style={childrenTransitionStyle[state]}
              >
                <li className="kelola-sidebar-collapsed-active">
                  <span>User</span>
                </li>
                <li>
                  <span>Role</span>
                </li>
                <li>
                  <span>Permission</span>
                </li>
                <li>
                  <span>User Group</span>
                </li>
              </ul>
            )}
          </Transition>
        </li>
        <li
          className={`kelola-menu-has-children ${
            childrenOpen.find((children) => children.id === 2).open
              ? "kelola-menu-has-children-active"
              : ""
          }`}
          onClick={() => handleOpenChildren(2)}
        >
          <span>Product</span>
          <Transition
            key="2"
            in={childrenOpen.find((children) => children.id === 2).open}
            timeout={100}
            appear
            unmountOnExit
          >
            {(state) => (
              <ul
                className="kelola-menu-children"
                style={childrenTransitionStyle[state]}
              >
                <li>
                  <span>Product List</span>
                </li>
                <li>
                  <span>Category</span>
                </li>
                <li>
                  <span>Unit</span>
                </li>
                <li>
                  <span>Tags</span>
                </li>
              </ul>
            )}
          </Transition>
        </li>
      </ul>
    </div>
  );
}

export default SidebarCollapsed;
