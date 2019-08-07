import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class Text extends React.Component {
  render() {
    return (
      <div className="Input_Name">
        <label className="col-sm-12 col-form-label">Text</label>
        <div className="form-group row pl-2">
          <div className="col-sm-12">
            <Field
              name="text"
              className="form-control"
              component="input"
              type="text"
              placeholder="Your text"
            />
            <p>!!!    add more inputs text !!!</p>
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

Text = connect(
  mapStateToProps,
)(Text);

export default reduxForm({
  form: "question",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Text);
