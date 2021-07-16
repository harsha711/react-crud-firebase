import React, { useState, useEffect } from "react";
import ContactForm from "./contactForm";
import firebaseDb from "../firebase";

const Contacts = () => {
  const [contactObjects, setContactObjects] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({ ...snapshot.val() });
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId === "") {
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else {
          setCurrentId("");
        }
      });
    }
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      firebaseDb.child(`contacts/${id}`).remove((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  };
  return (
    <React.Fragment>
      <div className="p-5 mb-3 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5">Contact Register/Forms</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm
            addOrEdit={addOrEdit}
            currentId={currentId}
            contactObjects={contactObjects}
          />
        </div>
        <div className="col-md-7">
          List of contacts
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObjects[id].fullname}</td>
                    <td>{contactObjects[id].mobile}</td>
                    <td>{contactObjects[id].email}</td>
                    <td>
                      <a
                        className="btn btn-primary btn-sm"
                        onClick={() => setCurrentId(id)}
                      >
                        <i className="fas fa-edit" />
                      </a>
                      &nbsp;
                      <a
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(id)}
                      >
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
