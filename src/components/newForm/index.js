import React from "react";
import { connect } from "react-redux";
import addIndexedDB from "../indexedDB";
import FormInputs from "../formInputs";
import InputList from "../formInputs/InputList";

class NewForm extends React.Component {
  renderList() {
    if (this.props.createForm.length === 0) {
      return (
        <div className="text-center font-weight-bold">
          <div>Your Field List is Empty</div>
          <div className="py-3">
            <i className="fas fa-plus-circle fa-5x pr-3 text-secondary" />
          </div>
          <div>Please Add First Field</div>
        </div>
      );
    }
    return this.props.createForm.map((input, index) => {
      return (
        <div key={input + index}>
          <FormInputs inputType={input} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-lg-4 order-lg-2">
            <InputList />
            <button
              className="btn btn-primary btn-block btn-phone"
              onClick={() => addIndexedDB(this.props.saveData)}
            >
              Save Form
            </button>
          </div>
          <div className=" pt-3 col-lg-8 col-sm-12 order-lg-1">
            <div>{this.renderList()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    createForm: state.createForm,
    saveData: state
  };
};

export default (NewForm = connect(mapStateToProps)(NewForm));

//  reduxForm({
//   form: "question",
//   destroyOnUnmount: false,
//   forceUnregisterOnUnmount: true
// })(NewForm);
