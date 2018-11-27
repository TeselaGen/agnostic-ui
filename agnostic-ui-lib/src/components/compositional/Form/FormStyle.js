import React, { Component } from "react";

/**
 * FormStyle is responsible for setting the overall style for
 * its children based on semantic (human understandable) presets.
 * This is where theming and UX preferences logic would live.
 * Additionally FormStyle needs to be aware of the overall layout
 * of the Form so it can use the proper wrapping div.
 */
class FormStyle extends Component {
  render() {
    const {
      spec: { spacing = "default", theme = "light" },
      layout: { type: layoutType = "block" }
    } = this.props;

    // Each of these sections should be refactored
    // into its own function that converts the semantic
    // preset into a style
    let paddingValue = 7;
    if (spacing === "compact") {
      paddingValue = 2;
    } else if (spacing === "comfortable") {
      paddingValue = 5;
    }

    const spacingStyle = {
      paddingTop: `${paddingValue}px`,
      paddingBottom: `${paddingValue}px`,
      paddingLeft: `${paddingValue}px`,
      paddingRight: `${paddingValue}px`
    };

    let backgroundColor = "#FFFFFF";
    let color = "#2F4F4F";

    if (theme === "dark") {
      let tmpColor = backgroundColor;
      backgroundColor = color;
      color = tmpColor;
    }

    const coloring = {
      backgroundColor,
      color
    };

    let style = {
      ...coloring,
      ...spacingStyle
    };

    if (layoutType === "inline") {
      style.display = "inline-block";
    } else {
      style.display = "block";
    }

    return <div style={style}>{this.props.children}</div>;
  }
}

export { FormStyle };
