import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class CheckBox extends React.Component {
  renderCheckBox() { // zrobic map() + liste z iloscia inputow
    return (
      <div className="input-group ml-3 mb-1">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <Field
              name="input1" // nazwy dynamicznie
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          placeholder ="Checkbox Text"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Input_Name">
        <label className="col-sm-12 col-form-label">Check Boxes</label>
        {this.renderCheckBox()}
        {this.renderCheckBox()}
        {this.renderCheckBox()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    saveData: state
  };
};

CheckBox = connect(
  mapStateToProps,
)(CheckBox);

export default reduxForm({
  form: "question",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(CheckBox);
