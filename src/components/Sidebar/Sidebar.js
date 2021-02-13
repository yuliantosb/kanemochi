import "./Sidebar.css";

function Sidebar({ toggle }) {
  return (
    <div className="kelola-sidebar">
      <ul>
        <li onClick={toggle}>
          <span>
            <i className="feather-home" />
          </span>
        </li>
        <li className="kelola-sidebar-active">
          <span>
            <i className="feather-folder" />
          </span>
        </li>
        <li>
          <span>
            <i className="feather-grid" />
          </span>
        </li>
        <li>
          <span>
            <i className="feather-layers" />
          </span>
        </li>
        <li>
          <span>
            <i className="feather-briefcase" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
