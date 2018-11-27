import React, { Component } from "react";

/**
 * FormLayout is responsible for setting the overall layout for
 * the container, <div>, in which the FormElements are rendered.
 * This is where responsive logic would go.
 */
class FormLayout extends Component {
    render() {
        const {
            spec: {
                type: layoutType = "block"
            }
        } = this.props;

        // This is only a bad example... these layouts should really
        // be Flex box layouts
        if(layoutType === "inline"){
            return (
                <div style={{ display: "inline-block" }}>
                    {this.props.children}
                </div>
            )
        } else {
            if(layoutType !== "block"){
                console.warn(`Unknow layout type: ${layoutType} for form. Defaulting to "block"`);
            }
            return (
                <div style={{ display: "block" }}>
                    {this.props.children}
                </div>
            )
        }
    }
}

export { FormLayout };