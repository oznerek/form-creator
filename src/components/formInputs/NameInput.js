import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class NameInput extends React.Component {
  render() {
    return (
      <div className="Input_Name">
        <label className="col-sm-12 col-form-label">Name</label>
        <div className="form-group row pl-2">
          <div className="col-sm-6">
            <Field
              name='Name'
              className="form-control"
              component="input"
              type="text"
              placeholder="Name"
              disabled
            />
          </div>

          <div className="col-sm-6">
            <Field
              name='LastName'
              className="form-control"
              component="input"
              type="text"
              placeholder="LastName"
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    saveData: state
  };
};

NameInput = connect(
  mapStateToProps,
)(NameInput);

export default reduxForm({
  form: "question",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(NameInput);
