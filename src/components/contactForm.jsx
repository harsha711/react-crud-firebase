import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initialFieldValues = {
    fullname: "",
    mobile: "",
    email: "",
    address: "",
  };

  const { addOrEdit, currentId, contactObjects } = props;
  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (currentId !== "") {
      setValues({ ...contactObjects[currentId] });
    } else {
      setValues({ ...initialFieldValues });
    }
  }, [currentId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    //console.log(name, value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };

  return (
    <form onSubmit={handleSave}>
      <div className="input-group ">
        <span className="input-group-text">
          <i className="fas fa-user" />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          name="fullname"
          onChange={handleInputChange}
          value={values.fullname}
        />
      </div>
      <br />
      <div className="row">
        <div className="col-md-5">
          <div className="input-group ">
            <span className="input-group-text">
              <i className="fas fa-mobile" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              name="mobile"
              onChange={handleInputChange}
              value={values.mobile}
            />
          </div>
        </div>
        <div className="col-md-7">
          <div className="input-group ">
            <span className="input-group-text">
              <i className="fas fa-envelope" />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={values.email}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="input-group ">
        <span className="input-group-text">
          <i className="fas fa-address-card" />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          name="address"
          onChange={handleInputChange}
          value={values.address}
        />
      </div>
      <br />
      <button className="btn btn-primary col-md-12" type="submit">
        {currentId === "" ? "Save" : "Update"}
      </button>
    </form>
  );
};

export default ContactForm;
