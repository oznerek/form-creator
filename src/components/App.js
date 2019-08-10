import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Intro from "./intro";
import NewForm from "./newForm";
import Header from "./header";

const App = () => {
  return (
    <div className="container py-2">
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" exact component={Intro} />
          {/* <Route path="/newform" exact component={NewForm} /> */}
          <Route exact path="/newField" exact component={NewForm} />
        </div>
      </BrowserRouter>
      <footer>
        <div className="copyright text-center pt-5 text-dark">
          &copy; by Michal Oznerek 2019
        </div>
      </footer>
    </div>
  );
};

export default App;
