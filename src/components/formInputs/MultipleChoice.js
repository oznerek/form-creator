import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class MultipleChoice extends React.Component {
  renderChoiceInput() { // zrobic map() + liste z iloscia inputow
    return (
      <div className="input-group ml-3 mb-1">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <Field
              name="choiceInput" // nazwy dynamicznie
              id="employed"
              component="input"
              type="radio"
            />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          placeholder ="Text Choice Input"
        />
      </div>
    );
  }

  render() {
    return (
      <div className="Input_Name">
        <label className="col-sm-12 col-form-label">Check Boxes</label>
        {this.renderChoiceInput()}
        {this.renderChoiceInput()}
        {this.renderChoiceInput()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    saveData: state
  };
};

MultipleChoice = connect(
  mapStateToProps,
)(MultipleChoice);

export default reduxForm({
  form: "question",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(MultipleChoice);
