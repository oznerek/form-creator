import React from "react";

class Intro extends React.Component {
 
  render() {
    const createNewForm = () => {
      localStorage.clear();
      window.location.href = `${process.env.PUBLIC_URL}/newField`;
    };
  return (
    <div className="container">
    <div className='row'>
      <div className="col-2" />
      <div className="py-3 col-8">
        <h3 className="text-center">Start make a Forms</h3>
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
