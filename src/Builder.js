import React, { useState } from 'react';
import { FormBuilder as FB } from '@ginkgo-bioworks/react-json-schema-form-builder';

const FormBuilderComponent = () => {
  const [schema, setSchema] = useState(JSON.stringify({"type":"object","properties":{"make":{"title":"Make","type":"string"},"model":{"title":"Model","type":"string"}},"dependencies":{},"required":[]}));
  const [uischema, setUISchema] = useState(JSON.stringify({"ui:order":["make","model"]}))

  return <FB
  schema={schema}
  uischema={uischema}
  onChange={(newSchema, newUiSchema) => {
    console.log({ newSchema: JSON.parse(newSchema), newUiSchema: JSON.parse(newUiSchema) });
    setSchema(newSchema);
    setUISchema(newUiSchema);
  }}
/>
}

export default FormBuilderComponent;
