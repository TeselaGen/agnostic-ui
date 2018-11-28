import React, { Component } from "react";
import { FormStyle } from "./FormStyle";
import { FormLayout } from "./FormLayout";
import { FormElement } from "./FormElement";

class Form extends Component {
  render() {
    const {
      spec: {
        form: {
          style: { inner: innerStyle, outer: outerStyle } = {},
          layout: formLayout = {}
        } = {},
        elements = [],
        data: formData = {},
        controllers = {}
      } = {}
    } = this.props;

    let formElements = elements.map(formElementSpec => {
      return (
        <FormElement
          spec={formElementSpec}
          data={formData}
          controllers={controllers}
          layout={formLayout}
        />
      );
    });

    return (
      <FormStyle spec={outerStyle} layout={formLayout}>
        <FormLayout spec={formLayout}>
          <FormStyle spec={innerStyle} layout={formLayout}>
            {formElements}
          </FormStyle>
        </FormLayout>
      </FormStyle>
    );
  }
}

export { Form };
