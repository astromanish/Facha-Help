import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./app.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/pages/home";

import DiscussionForum from "./components/pages/discussion-forum";
import AnswerAll from "./components/DiscussionForum/answer-all";

import { QuestionProvider } from "./components/DiscussionForum/QuestionContext";
import { AnswerProvider } from "./components/DiscussionForum/AnswerContext";

import AboutUs from "./components/pages/about-us";

import Fests from "./components/pages/fests";
import KashiYatra from "./components/Fests/KashiYatra";
import Technex from "./components/Fests/Technex";
import FMCWeekend from "./components/Fests/fmc-weekend";
import Spardha from "./components/Fests/Spardha";
import DeptFests from "./components/Fests/dept-fests";

import Gymkhana from "./components/pages/gymkhana";
import Academics from "./components/pages/academics";
import WebPresence from "./components/pages/web-presence";

import Feedback from "./components/pages/feedback";
import RegistrationGuide from "./components/pages/registration-guide";
import PlacementStats from "./components/pages/placement-stats";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="body-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/fests" component={Fests} />
            <Route exact path="/fests/kashiyatra" component={KashiYatra} />
            <Route exact path="/fests/technex" component={Technex} />
            <Route exact path="/fests/fmc-weekend" component={FMCWeekend} />
            <Route exact path="/fests/spardha" component={Spardha} />
            <Route exact path="/fests/dept-fest" component={DeptFests} />
            <Route exact path="/gymkhana" component={Gymkhana} />
            <Route exact path="/web-presence" component={WebPresence} />
            <Route exact path="/academics" component={Academics} />
            <Route excat path="/feedback" component={Feedback} />
            <Route
              exact
              path="/registration-guide"
              component={RegistrationGuide}
            />
            <Route excat path="/placement-stats" component={PlacementStats} />
            <QuestionProvider>
              <AnswerProvider>
                <Route
                  exact
                  path="/discussion-forum"
                  component={DiscussionForum}
                />
                <Route
                  exact
                  path="/discussion-forum/:ques_id/answers"
                  component={AnswerAll}
                />
              </AnswerProvider>
            </QuestionProvider>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
