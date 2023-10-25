import React from "react";

export function NameInput(props) {
  function handleChange(e) {
    const nameRegEx =
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/;
    if (nameRegEx.test(e.target.value)) {
      document.getElementById("name-error").classList.add("hide");
    }
  }

  return (
    <>
      <div className="input-text flex-row">
        <p className="dark-blue regular">Name</p>
        <p className="hide" id="name-error">
          Please submit a valid name
        </p>
      </div>
      <input
        className="form-input"
        id="name-input"
        name="name"
        defaultValue={props.value}
        onChange={(e) => handleChange(e)}
      ></input>
    </>
  );
}

export function EmailInput(props) {
  function handleChange() {
    const emailRegEx =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegEx.test(document.getElementById("email-input").value)) {
      document.getElementById("email-error").classList.add("hide");
    }
  }

  return (
    <>
      <div className="input-text flex-row">
        <p className="dark-blue regular">Email</p>
        <p className="hide" id="email-error">
          Please submit a valid email
        </p>
      </div>
      <input
        className="form-input"
        id="email-input"
        name="email"
        defaultValue={props.value}
        onChange={handleChange}
      ></input>
    </>
  );
}

export function PhoneInput(props) {
  function handleChange() {
    const phoneRegEx = /[0-9]{10,13}/;
    if (phoneRegEx.test(document.getElementById("phone-input").value)) {
      document.getElementById("phone-error").classList.add("hide");
    }
  }

  return (
    <>
      <div className="input-text flex-row">
        <p className="dark-blue regular">Phone</p>
        <p className="hide" id="phone-error">
          Please submit a valid phone number
        </p>
      </div>
      <input
        className="form-input"
        id="phone-input"
        name="phone"
        defaultValue={props.value}
        onChange={handleChange}
      ></input>
    </>
  );
}
