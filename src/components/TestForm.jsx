import React, { useState } from "react";
import TemplateForm from "./TemplateForm";

function TestForm() {
  const header = "Form Header";
  const inputFields = ["first name", "last name", "email", "contact"];

  return (
    <div>
      <TemplateForm header={header} inputFields={inputFields} />
    </div>
  );
}

export default TestForm;
