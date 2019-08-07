import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class AddressInput extends React.Component {
  render() {

    return (
            <div className="Input_Address">
            <label className="col-sm-12 col-form-label">Address</label>
            <div className="form-group row pl-2">

                <div className="col-sm-12">
                  <Field
                    name='streetName'
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="Street Name"
                  />
                </div> </div>
                <div className="form-group row pl-2">

                <div className="col-sm-12">
                  <Field
                    name='secondLineAddress'
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="Address Line 2"
                  >
                  </Field>
                </div>
                </div>
                
                <div className="form-group row pl-2">
                <div className="col-sm-6">
                  <Field
                    name='city'
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="City"
                  />
                </div>
              
                <div className="col-sm-6">
                  <Field
                    name='state'
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="State / Province / Region"
                  >
                  </Field>
                </div>
                </div>
                <div className="form-group row pl-2">
                <div className="col-sm-6">
                  <Field
                    name='zipCode'
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="Zip Code"
                  />
                </div>
              
                <div className="col-sm-6">
                  <Field
                    name='country'
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="Country"
                  >
                  </Field>
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

AddressInput = connect(
  mapStateToProps,
)(AddressInput);

export default reduxForm({
  form: "question",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(AddressInput);
