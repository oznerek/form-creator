import React from "react";
import {NavLink} from 'react-router-dom'

class Intro extends React.Component {
 
  render() {
    const createNewForm = () => {
      localStorage.clear();
    };
  return (
    <div className="container">
    <div className='row'>
      <div className="col-2" />
      <div className="py-3 col-8">
        <h3 className="text-center">Start make a Forms</h3>
        <NavLink exact to="/newField">        <button
          className="btn btn-success btn-lg btn-block"
          onClick={createNewForm}
        >
          Start
        </button>
        </NavLink>

      </div>
      <div className="col-2" />
      </div>
    </div>
  );
  }
};

export default Intro;
