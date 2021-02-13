import logo from "../../assets/logo.png";
import profile from "../../assets/profile.jpg";
import "./Navbar.css";
import { Transition } from "react-transition-group";
import { useState } from "react";
import Button from "../Button/Button";
import english from "../../assets/icons/english.png";
import bahasa from "../../assets/icons/bahasa.png";
import { Modal, Select } from "antd";

const searchTransitionStyle = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const { Option } = Select;

function Navbar() {
  const [search, setSearch] = useState(false);
  const [message, setMessage] = useState(false);
  const [notification, setNotification] = useState(false);
  const [account, setAccount] = useState(false);
  const [modal, setModal] = useState(false);
  const [language, setLanguage] = useState("english");

  const handleChangeLanguage = () => {
    setModal(true);
  };

  const handleCancel = () => {
    setModal(false);
  };

  const handleChange = (value) => {
    setLanguage(value);
    setModal(false);
  };

  return (
    <div className="kelola-navbar">
      <Modal
        title="Select Language"
        visible={modal}
        footer={null}
        onCancel={handleCancel}
        width={250}
      >
        <Select
          defaultValue={language}
          onChange={handleChange}
          style={{ width: "100%" }}
        >
          <Option value="bahasa">
            <div className="kelola-select">
              <img src={bahasa} alt="Bahasa" />
              <span>Bahasa Indonesia</span>
            </div>
          </Option>
          <Option value="english">
            <div className="kelola-select">
              <img src={english} alt="English" />
              <span>English</span>
            </div>
          </Option>
        </Select>
      </Modal>

      <div className="kelola-left-navbar">
        <img src={logo} className="kelola-logo" alt="logo" />
      </div>
      <div className="kelola-right-navbar">
        <div className="kelola-search-wrapper">
          <div className="kelola-search">
            <input
              type="text"
              placeholder="Search..."
              onFocus={() => setSearch(true)}
              onBlur={() => setSearch(false)}
            />
            <span>
              <i className="feather-search" />
            </span>
          </div>
          <Transition in={search} timeout={100} appear unmountOnExit>
            {(state) => (
              <div
                className="kelola-search-result-content"
                style={searchTransitionStyle[state]}
              >
                <ul>
                  <li className="title">HRIS &gt; Employee</li>
                  <li>Manage Employee</li>
                  <li>Recruitment</li>
                  <li>Training</li>
                </ul>
                <ul>
                  <li className="title">Sales &gt; Employment</li>
                  <li>Reward and Punishment</li>
                  <li>Gathering and events</li>
                </ul>
              </div>
            )}
          </Transition>
        </div>
        <div className="kelola-flex">
          <div
            className="kelola-badge-wrapper"
            onClick={() => setMessage(!message)}
          >
            <div className="kelola-badge">
              <span>5</span>
            </div>
            <i className="feather-mail" />

            <Transition in={message} timeout={100} appear unmountOnExit>
              {(state) => (
                <>
                  <svg
                    width="34"
                    height="29"
                    viewBox="0 0 34 29"
                    fill="none"
                    className="kelola-bubble-dropdown"
                    style={searchTransitionStyle[state]}
                  >
                    <path
                      d="M1.41154 28L17 0.999999L32.5885 28H1.41154Z"
                      fill="white"
                      stroke="#f1f1f5"
                    />
                  </svg>
                  <div
                    className="kelola-dropdown"
                    style={searchTransitionStyle[state]}
                  >
                    <h3 className="kelola-dropdown-title">Message</h3>
                    <div className="kelola-dropdown-content-wrapper">
                      <div className="kelola-dropdown-content">
                        <img
                          alt="Daniel Caesar"
                          src={`https://i.pravatar.cc/150?img=3`}
                        />
                        <div className="kelola-dropdown-wrapper">
                          <div>
                            <span className="kelola-dropdown-title-left">
                              Daniel Caesar
                            </span>
                            <span className="kelola-dropdown-title-right">
                              A minute ago
                            </span>
                          </div>
                          <p className="kelola-dropdown-text">
                            Hey you!, please check the assignment I create for
                            you!, need your confirmation ASAP, Thanks
                          </p>
                        </div>
                      </div>

                      <div className="kelola-dropdown-content">
                        <img
                          alt="Danel Wo"
                          src={`https://i.pravatar.cc/150?img=2`}
                        />
                        <div className="kelola-dropdown-wrapper">
                          <div>
                            <span className="kelola-dropdown-title-left">
                              Daniel Wo
                            </span>
                            <span className="kelola-dropdown-title-right">
                              22 minutes ago
                            </span>
                          </div>
                          <p className="kelola-dropdown-text">
                            Hey bro! are you feelin hungry? I cook some foods,
                            see me at canteen I made alot for you
                          </p>
                        </div>
                      </div>

                      <div className="kelola-dropdown-content">
                        <img
                          alt="Catherine White"
                          src={`https://i.pravatar.cc/150?img=1`}
                        />
                        <div className="kelola-dropdown-wrapper">
                          <div>
                            <span className="kelola-dropdown-title-left">
                              Catherine White
                            </span>
                            <span className="kelola-dropdown-title-right">
                              2 hours ago
                            </span>
                          </div>
                          <p className="kelola-dropdown-text">
                            Hi, I need your work done at 2pm today, please send
                            me you work immediately.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="kelola-dropdown-action-button">
                      <Button type="secondary">Clear All</Button>
                    </div>
                  </div>
                </>
              )}
            </Transition>
          </div>
          <div
            className="kelola-badge-wrapper"
            onClick={() => setNotification(!notification)}
          >
            <div className="kelola-badge">
              <span>6</span>
            </div>
            <i className="feather-bell" />

            <Transition in={notification} timeout={100} appear unmountOnExit>
              {(state) => (
                <>
                  <svg
                    width="34"
                    height="29"
                    viewBox="0 0 34 29"
                    fill="none"
                    className="kelola-bubble-dropdown"
                    style={searchTransitionStyle[state]}
                  >
                    <path
                      d="M1.41154 28L17 0.999999L32.5885 28H1.41154Z"
                      fill="white"
                      stroke="#f1f1f5"
                    />
                  </svg>
                  <div
                    className="kelola-dropdown"
                    style={searchTransitionStyle[state]}
                  >
                    <h3 className="kelola-dropdown-title">Notification</h3>
                    <div className="kelola-dropdown-content-wrapper">
                      <div className="kelola-dropdown-content">
                        <div className="kelola-dropdown-icon-wrapper">
                          <span className="kelola-dropdown-icon">
                            <i className="feather-clipboard" />
                          </span>
                        </div>
                        <div className="kelola-dropdown-wrapper">
                          <p className="kelola-dropdown-text">
                            You are assign ‘Invasion Mars Mission’ by Handri
                            Lou, Please check it out
                          </p>
                          <span className="kelola-dropdown-title-right">
                            22 minutes ago
                          </span>
                        </div>
                      </div>

                      <div className="kelola-dropdown-content">
                        <div className="kelola-dropdown-icon-wrapper">
                          <span className="kelola-dropdown-icon">
                            <i className="feather-users" />
                          </span>
                        </div>
                        <div className="kelola-dropdown-wrapper">
                          <p className="kelola-dropdown-text">
                            Today is Catherine’s brithday
                          </p>
                          <span className="kelola-dropdown-title-right">
                            34 minutes ago
                          </span>
                        </div>
                      </div>

                      <div className="kelola-dropdown-content">
                        <div className="kelola-dropdown-icon-wrapper">
                          <span className="kelola-dropdown-icon">
                            <i className="feather-users" />
                          </span>
                        </div>
                        <div className="kelola-dropdown-wrapper">
                          <p className="kelola-dropdown-text">
                            You have an achievement from ‘Daniel Caesar’ to be
                            the best employee of a month, Congrats!
                          </p>
                          <span className="kelola-dropdown-title-right">
                            2 hours ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="kelola-dropdown-action-button">
                      <Button type="secondary">Clear All</Button>
                    </div>
                  </div>
                </>
              )}
            </Transition>
          </div>
          <div
            className="kelola-profile-wrapper"
            onClick={() => setAccount(!account)}
          >
            <div className="kelola-profile-name">
              <h4>Joel Anthonio</h4>
              <span>Administrator</span>
            </div>
            <img src={profile} className="kelola-profile" alt="profile" />

            <Transition in={account} timeout={100} appear unmountOnExit>
              {(state) => (
                <>
                  <svg
                    width="34"
                    height="29"
                    viewBox="0 0 34 29"
                    fill="none"
                    className="kelola-bubble-dropdown kelola-bubble-dropdown-profile"
                    style={searchTransitionStyle[state]}
                  >
                    <path
                      d="M1.41154 28L17 0.999999L32.5885 28H1.41154Z"
                      fill="white"
                      stroke="#f1f1f5"
                    />
                  </svg>
                  <div
                    className="kelola-profile-toggle"
                    style={searchTransitionStyle[state]}
                  >
                    <ul>
                      <li>
                        <i className="feather-user" /> Profile
                      </li>
                      <li>
                        <i className="feather-settings" /> Settings
                      </li>
                      <li>
                        <i className="feather-log-out" /> Logout
                      </li>
                      <li className="kelola-divider" />
                      <li>
                        <div
                          className="kelola-language"
                          onClick={handleChangeLanguage}
                        >
                          <span>Language</span>
                          <img
                            src={language === "english" ? english : bahasa}
                            alt="English"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
