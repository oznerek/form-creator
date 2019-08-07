import React from "react";
import { reduxForm } from "redux-form";
import { addSubQuestion, deleteInput } from "../../actions";
import { connect } from "react-redux";
import CheckBox from './CheckBox'
import MultipleChoice from './MultipleChoice'
import DropDown from './DropDown'
import NameInput from './NameInput'
import AddressInput from './AddressInput'
import Email from './Email'
import PhoneNumber from './PhoneNumber'
import Text from './Text'
import Notes from './Notes'


class FormInput extends React.Component {
  renderInput() {
    let words = this.props.inputType
    let position = words.indexOf('_')
    let inputType = words.slice(0, position)

    switch (inputType) {
      case 'addName':
      return <div><NameInput name={words} /></div>
      case 'addAddress':
      return <div><AddressInput /></div>
      case 'addEmail':
      return <div><Email /></div>
      case 'addPhone':
      return <div><PhoneNumber /></div>
      case 'addText':
      return <div><Text /></div>
      case 'addTextBox':
      return <div><Notes /></div>
      case 'addCheckBox':
      return <div><CheckBox /></div>
      case 'addRadioInput':
      return <div><MultipleChoice /></div>
      case 'addList':
      return <div><DropDown /></div>
      default :
      return <div><p>Something is Wrong</p><p>Try add a Fields again</p></div>
    }   
  }
  
  editField = this.editField.bind(this)
  editField() {
    console.log(this)
  }

  render() {
    const { handleSubmit} = this.props;
   
    return (
      <div className="form card select-form">
        <div className="row">
          <div className="col-11 pt-2 ">
            <form onSubmit={handleSubmit} className="">
              {this.renderInput()}
            </form>
          </div>
          <div className="col-1 edit">
            <i className="far fa-edit" data-target="#navbarCollapse2" data-toggle="collapse" onClick={()=>this.editField(this.props.deleteInput)} />
            <i className="far fa-trash-alt" onClick={()=>this.props.deleteInput(this.props.inputType)}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nameData: state
  };
};

FormInput = connect(
  mapStateToProps,
  { addSubQuestion, deleteInput }
)(FormInput);

export default reduxForm({
  form: "question",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormInput);
