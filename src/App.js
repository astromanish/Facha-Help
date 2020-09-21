import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Header from "./components/header";
import Homepage from "./components/homepage";
import DiscussionForum from "./components/discussionForum";
import AnswerAll from "./components/Discussion_Forum/answerAll";
import Footer from "./components/footer";

import { QuestionProvider } from "./components/Discussion_Forum/QuestionContext";
import { AnswerProvider } from "./components/Discussion_Forum/AnswerContext";
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/aboutus" component={AboutUs} />
          <QuestionProvider>
            <AnswerProvider>
              <Route exact path="/discussion" component={DiscussionForum} />
              <Route
                exact
                path="/discussion/:ques_id/answers"
                component={AnswerAll}
              />
            </AnswerProvider>
          </QuestionProvider>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
