import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class Notes extends React.Component {
  render() {
    return (
      <div className="Input_Name">
        <label className="col-sm-12 col-form-label">Text</label>
        <div className="form-group row pl-2">
          <div className="col-sm-12">
            <Field
              name="notes"
              className="form-control"
              component="textarea"
              placeholder="Your text"
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

Notes = connect(
  mapStateToProps,
)(Notes);

export default reduxForm({
  form: "question",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Notes);
