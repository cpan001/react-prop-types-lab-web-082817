// Code Product Component Here
import React from "react";
import PropTypes from "prop-types";

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? "has watermark" : "no watermark"}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: function weightCheck(props, propName, componentName) {
    let value = props[propName];
    if (!value) {
      return new Error("need to exist");
    } else if (typeof value !== "number") {
      return new Error("need to be a number");
    } else {
      if (value < 80 || value > 300) {
        return new Error(
          propName + " in " + componentName + " within range of 80-300"
        );
      }
    }
  }
};
