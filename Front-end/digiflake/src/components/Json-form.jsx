import React from "react";

const data = {
  form: {
    sections: [
      {
        order: 1,
        section_title: "User-Information",
        fields: [
          {
            name: "name",
            lable: "name",
            required: true,
            html_elememt: "textbox",
          },
          {
            name: "email",
            lable: "email",
            required: true,
            html_elememt: "email",
          },
          {
            name: "phone",
            lable: "phone",
            required: true,
            html_elememt: "textbox",
          },
          {
            name: "password",
            lable: "password",
            required: true,
            html_elememt: "textbox",
          },
          
        ],
      },
    ],
  },
};

function Jsonform() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        {data.form.sections.map((userData) => {
          return (
            <div>
              <h1>{userData.section_title}</h1>
              {userData.fields.map((input) => {
                return (
                  <div>
                    <label htmlFor="">{input.lable}</label>
                    <input
                      type={input.html_elememt}
                      name={input.name}
                      required={input.required}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Jsonform;
