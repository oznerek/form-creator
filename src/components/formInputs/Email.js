import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class Email extends React.Component {
  render() {
    return (
      <div className="Input_Name">
        <label className="col-sm-12 col-form-label">Email</label>
        <div className="form-group row pl-2">
          <div className="col-sm-12">
            <Field
              name="Email"
              className="form-control"
              component="input"
              type="email"
              placeholder="Email"
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

Email = connect(
  mapStateToProps,
)(Email);

export default reduxForm({
  form: "question",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Email);
