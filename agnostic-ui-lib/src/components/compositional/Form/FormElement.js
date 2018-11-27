import React, { Component } from "react";

class FormElement extends Component {
    render() {

        const {
            spec: {
                type: elementType
            },
            spec,
            data: formData,
            controllers
        } = this.props;


        if(elementType === "field"){
            return <FormField spec={spec} data={formData} controllers={controllers} />;
        } else if(elementType === "action") {
            return <FormAction spec={spec} data={formData} controllers={controllers} />;
        } else if(elementType === "summary-list") {
            return <FormSummaryList spec={spec} data={formData} controllers={controllers} />;
        } else {
            return <UnknownComponent />;
        }
    }
}

export { FormElement };
