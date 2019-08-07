import React from "react";

class Intro extends React.Component {
 
  render() {
    const createNewForm = () => {
      localStorage.clear();
      window.location.href = "http://localhost:3000/newField";
    };
  return (
    <div className="container">
    <div className='row'>
      <div className="col-2" />
      <div className="py-3 col-8">
        <h3 className="text-center">Start make a Form</h3>
        <button
          className="btn btn-success btn-lg btn-block"
          onClick={createNewForm}
        >
          Start
        </button>
      </div>
      <div className="col-2" />
      </div>
    </div>
  );
  }
};

export default Intro;
