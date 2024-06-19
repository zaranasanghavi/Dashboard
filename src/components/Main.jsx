import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <div className={`main ${className}`}>
      <div className="main-child" />
      <div className="content-wrapper">
        <div className="inner-content">
          <div className="layout">
            <img
              className="layout-child"
              loading="lazy"
              alt=""
              src="/group-513967.svg"
            />
            <div className="pondox-wrapper">
              <img
                className="pondox-icon"
                loading="lazy"
                alt=""
                src="/pondox.svg"
              />
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <button className="vector-group">
            <img className="frame-child9" alt="" src="/rectangle-721.svg" />
            <img className="frame-child10" alt="" src="/group-2945.svg" />
            <div className="dashboard-title">
              <a className="dashboard">Dashboard</a>
            </div>
          </button>
          <div className="stats">
            <nav className="stats-grid">
              <div className="stats-row">
                <img
                  className="cocolinescan-6"
                  alt=""
                  src="/cocolinescan--6.svg"
                />
                <div className="stats-values">
                  <a className="users">Users</a>
                </div>
              </div>
              <div className="stats-row1">
                <img
                  className="stats-row-child"
                  loading="lazy"
                  alt=""
                  src="/group-6046.svg"
                />
                <div className="schedule-wrapper">
                  <a className="schedule">Schedule</a>
                </div>
              </div>
              <div className="stats-row2">
                <img
                  className="stats-row-item"
                  loading="lazy"
                  alt=""
                  src="/group-3507.svg"
                />
                <div className="income-wrapper">
                  <div className="income">Income</div>
                </div>
              </div>
              <div className="stats-row3">
                <img
                  className="stats-row-inner"
                  loading="lazy"
                  alt=""
                  src="/group-6043.svg"
                />
                <div className="saved-wrapper">
                  <div className="saved">Saved</div>
                </div>
              </div>
              <div className="frame-parent4">
                <img
                  className="frame-child11"
                  loading="lazy"
                  alt=""
                  src="/group-3510.svg"
                />
                <div className="settings">Settings</div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="background">
        <div className="bg-style">
          <div className="bg-style-child" />
          <div className="mask-group">
            <div className="mask-group-child" />
            <div className="title-wrapper">
              <div className="title-container">
                <b className="tittle">Upgrade Pro</b>
                <div className="upgrade-message">
                  <div className="upgrade-now-for">
                    Upgrade now for get benefits more.
                  </div>
                </div>
              </div>
            </div>
            <button className="button">
              <div className="button-child" />
              <div className="upgrade-plan">Upgrade Plan</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
