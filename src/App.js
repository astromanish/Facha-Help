import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import DiscussionForum from "./components/discussionForum";
import AddAnswer from "./components/Discussion_forum/AddAnswer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/discuss" component={DiscussionForum} />
          <Route exact path="/discuss/answers/:ques_id" component={AddAnswer} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
