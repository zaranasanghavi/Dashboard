import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  totalFollowers,
  k,
  prop,
  group513701,
  propBorder,
  propPadding,
  propBorder1,
  propBackgroundColor,
  propMinWidth,
  propGap,
  propMinWidth1,
  propAlignSelf,
  propHeight,
  propWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      border: propBorder,
      padding: propPadding,
    };
  }, [propBorder, propPadding]);

  const rectangleDivStyle = useMemo(() => {
    return {
      border: propBorder1,
    };
  }, [propBorder1]);

  const followerIconStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const totalFollowersStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const followerValuesStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const kStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propMinWidth1, propAlignSelf]);

  const groupIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div className={`rectangle-parent3 ${className}`} style={groupDivStyle}>
      <div className="frame-child12" style={rectangleDivStyle} />
      <div className="follower-row">
        <div className="follower-icons">
          <div className="follower-icon" style={followerIconStyle} />
        </div>
        <a className="total-followers" style={totalFollowersStyle}>
          {totalFollowers}
        </a>
      </div>
      <div className="follower-values" style={followerValuesStyle}>
        <div className="follower-numbers">
          <div className="k6" style={kStyle}>
            {k}
          </div>
          <div className="follower-trends">
            <div className="div1">{prop}</div>
            <div className="trend-icons">
              <img className="trend-icon" alt="" src="/trend-icon.svg" />
            </div>
          </div>
        </div>
        <img
          className="follower-values-child"
          loading="lazy"
          alt=""
          src={group513701}
          style={groupIconStyle}
        />
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  totalFollowers: PropTypes.string,
  k: PropTypes.string,
  prop: PropTypes.string,
  group513701: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propPadding: PropTypes.any,
  propBorder1: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propGap: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default GroupComponent1;
