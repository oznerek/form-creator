import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class PhoneNumber extends React.Component {
  render() {
    return (
      <div className="Input_Name">
        <label className="col-sm-12 col-form-label">Phone Number</label>
        <div className="form-group row pl-2">
          <div className="col-sm-12">
            <Field
              name="phoneNumber"
              className="form-control"
              component="input"
              type="number"
              placeholder="Phone Number"
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

PhoneNumber = connect(
  mapStateToProps,
)(PhoneNumber);

export default reduxForm({
  form: "question",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(PhoneNumber);
