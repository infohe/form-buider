import React, { Component } from 'react';
import Form from '@rjsf/core';
import { FormBuilder as FB } from '@ginkgo-bioworks/react-json-schema-form-builder';
 
const customFormInputs = {
  hidden: {
    displayName: "Hidden",
    matchIf: [
      {
        types: ["string"],
        widget: "hidden"
      },
    ],
    defaultDataSchema: {},
    defaultUiSchema: {
      "ui:widget": "hidden"
    },
    type: "string",
    cardBody: (parameters, onChange) => <div>
      <h5>This is a hidden field</h5>
      {/* <input
        value={parameters.default}
        placeholder="Default"
        type="text"
        onChange={(ev) =>
          onChange({ ...parameters, default: ev.target.value })
        }
      /> */}
    </div>,
    modalBody: (parameters, onChange) => <div>
      Extra editing options in modal appear hear
    </div>,
  },
};

export class FormBuilderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: '{}',
      uischema: '{}',
      formData: {}
    };
  }

  render() {
    return (
      <>
      <FB
        schema={this.state.schema}
        uischema={this.state.uischema}
        onChange={(newSchema, newUiSchema) => {
          console.log({ newSchema: JSON.parse(newSchema), newUiSchema: JSON.parse(newUiSchema) });
          this.setState({
            schema: newSchema,
            uischema: newUiSchema
          })
        }}
        mods={
          {
            customFormInputs
          }
        }
      />

      <Form
        schema={JSON.parse(this.state.schema)}
        uiSchema={JSON.parse(this.state.uischema)}
        onChange={(newFormData) => {
          console.log('Changing form data')
          console.log(JSON.stringify(newFormData, null, 2))
          this.setState({ formData: newFormData.formData })
        }}
        formData={this.state.formData}
        submitButtonMessage={"Submit"}
        validator={'a'}
        children={true}
      />
    </>
    );
  }
}

export default FormBuilderComponent;