import React, { useState } from "react";

function TemplateForm({ header, inputFields }) {
  const initialState = {};
  inputFields.forEach((field) => {
    initialState[field] = "";
  });
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="lg:p-20 p-5">
      <form className="border p-5 lg:p-10 lg:mx-40">
        <h2 className="text-xl mb-6">{header}</h2>

        <div className="flex flex-wrap">
          {inputFields.map((field, index) => (
            <div key={index} className="w-full lg:w-1/2 pr-5 mb-4">
              <input
                className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-b-1 focus:border-blue-500"
                type="text"
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                required
              />
            </div>
          ))}
        </div>
      </form>
    </section>
  );
}

export default TemplateForm;
