import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({
  className = "",
  comment,
  processModel,
  prop,
  group513701,
  propBackgroundColor,
  propHeight,
  propMinWidth,
}) => {
  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const commentStyle = useMemo(() => {
    return {
      height: propHeight,
      minWidth: propMinWidth,
    };
  }, [propHeight, propMinWidth]);

  return (
    <div className={`rectangle-parent4 ${className}`}>
      <div className="frame-child13" />
      <div className="frame-parent5">
        <div className="ellipse-wrapper">
          <div className="ellipse-div" style={ellipseDivStyle} />
        </div>
        <a className="comment" style={commentStyle}>
          {comment}
        </a>
      </div>
      <div className="frame-parent6">
        <div className="process-model-parent">
          <div className="process-model">{processModel}</div>
          <div className="div2">{prop}</div>
        </div>
        <div className="frame-wrapper2">
          <img
            className="frame-child14"
            loading="lazy"
            alt=""
            src={group513701}
          />
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  comment: PropTypes.string,
  processModel: PropTypes.string,
  prop: PropTypes.string,
  group513701: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propHeight: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent;
