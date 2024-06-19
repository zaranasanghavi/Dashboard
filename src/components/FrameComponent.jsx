import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`followers-grid-wrapper ${className}`}>
      <div className="followers-grid">
        <GroupComponent1
          totalFollowers="Total Followers"
          k="240k"
          prop="+10,3%"
          group513701="/group-513701.svg"
        />
        <GroupComponent1
          totalFollowers="New Likes"
          k="17302"
          prop="+3,14%"
          group513701="/group-513705.svg"
          propBorder="unset"
          propPadding="var(--padding-11xl) var(--padding-xl)"
          propBorder1="unset"
          propBackgroundColor="#307bf4"
          propMinWidth="77px"
          propGap="6px"
          propMinWidth1="unset"
          propAlignSelf="stretch"
          propHeight="50px"
          propWidth="62px"
        />
        <GroupComponent
          comment="Comment"
          processModel="2042"
          prop="+0%"
          group513701="/group-513701-1.svg"
        />
        <GroupComponent
          comment="Total Posts"
          processModel="1300"
          prop="+5%"
          group513701="/group-513701-2.svg"
          propBackgroundColor="#724ee6"
          propHeight="unset"
          propMinWidth="80px"
        />
        <div className="rectangle-parent5">
          <div className="frame-child15" />
          <div className="frame-parent7">
            <div className="ellipse-container">
              <div className="frame-child16" />
            </div>
            <a className="blocked-account">Blocked Account</a>
          </div>
          <div className="frame-parent8">
            <div className="training-and-documentation-parent">
              <div className="training-and-documentation">0</div>
              <div className="ongoing-support-and">+0%</div>
            </div>
            <div className="frame-wrapper3">
              <img
                className="frame-child17"
                loading="lazy"
                alt=""
                src="/group-513701-3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
