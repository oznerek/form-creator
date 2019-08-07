import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class DropDown extends React.Component {
  renderList() {
    // zrobic map() + liste z iloscia inputow
    return (
      
        <option >Choose...</option>

    );
  }

  render() {
    return (
      <div className="DropDown ml-3">
        <label className="col-sm-12 col-form-label">Drop Down</label>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
    <label className="input-group-text" >Options</label>
  </div>
          <Field name='dropDownList' component="select" className="custom-select">
            {this.renderList()}
          </Field>
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

DropDown = connect(
  mapStateToProps,
)(DropDown);

export default reduxForm({
  form: "question",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
})(DropDown);
