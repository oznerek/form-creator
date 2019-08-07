import React from "react";
import { connect } from "react-redux";
import { addInput } from "../../actions";
import Edit from '../newForm/Edit';
import $ from 'jquery';

class InputList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseElement :''
    }
  };

  componentDidMount() {
    this.selectEditList();
  }
  addClassActive() {
    $(".nav-link").click(function() {
      $(".nav-link").removeClass("active");
      $(this)
        .closest(".nav-link")
        .addClass("active");
    });
  }
  selectEditList=this.selectEditList.bind(this);
  selectInputList=this.selectInputList.bind(this);
  selectInputList() {
    this.addClassActive()
    this.setState({chooseElement: 'list'});
  }
  selectEditList() {
    this.addClassActive()
    this.setState({chooseElement: 'edit'});
  }


  renderInputList() {
    const inputsList = [
      // { icon: "fas fa-plus-circle fa-lg pr-3", name: "CLICK TO ADD A FIELD" },
      { icon: "far fa-user fa-lg pr-3", name: "Name", action: "addName" },
      { icon: "fas fa-home fa-lg pr-3", name: "Address", action: "addAddress" },
      { icon: "far fa-envelope fa-lg pr-3", name: "Email", action: "addEmail" },
      { icon: "fas fa-phone fa-lg pr-3", name: "Phone", action: "addPhone" },
      {
        icon: "fas fa-align-justify fa-lg pr-3",
        name: "Single Line Text",
        action: "addText"
      },
      {
        icon: "far fa-comment-alt fa-lg pr-3",
        name: "Message Text Box",
        action: "addTextBox"
      },
      {
        icon: "far fa-check-square fa-lg pr-3",
        name: "Check Boxes",
        action: "addCheckBox"
      },
      {
        icon: "fas fa-list-ul fa-lg pr-3",
        name: "Multiple Choise",
        action: "addRadioInput"
      },
      {
        icon: "far fa-caret-square-down fa-lg pr-3",
        name: "Drop Down List",
        action: "addList"
      }
    ];
      return inputsList.map(item => {
        let actionProperty = item.action;
        return (
          <button
            key={item.name}
            type="button"
            className="list-group-item list-group-item-action"
            onClick={() => this.props.addInput(actionProperty)}
          >
            <i className={item.icon} />
            {item.name}
          </button>
        );
      });
    }
    renderEditField() {
      return (<Edit />)
    }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#1">
                <button
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-expanded="true"
                  onClick = {this.selectInputList}
                >
                  <i className="fas fa-plus-circle fa-lg pr-3" />
                  Add Field
                </button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#2">
              <button
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse2" // zmienic na target edit
                  aria-expanded="true"
                  onClick = {this.selectEditList}
                >
                <i className="far fa-edit fa-lg pr-3" />
                Edit
                </button>
              </a>
            </li>
          </ul>
        </div>

        <div className="card-body pb-3" id='accordion'>
          <div className="navbar-collapse collapse show" id="navbarCollapse" data-parent="#accordion">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <div className="list-group">{this.renderInputList()}</div>
              </li>
            </ul>
          </div>
          
          <div className="navbar-collapse collapse" id="navbarCollapse2" data-parent="#accordion">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <div className="list-group"><Edit/></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    createForm: state.createForm
  };
};

const mapDispatchToProps = {
  addInput
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputList);
