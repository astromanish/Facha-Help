import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import DiscussionForum from "./components/discussionForum";
import Answers from './components/Discussion_forum/Answers';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/discuss" component={DiscussionForum} />
          <Route exact path="/discuss/:question_id/answers" component={Answers} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
