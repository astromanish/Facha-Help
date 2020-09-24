import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Header from "./components/header";
import Homepage from "./components/homepage";
import DiscussionForum from "./components/discussionForum";
import WebPresence from "./components/webPresence";
import AnswerAll from "./components/Discussion_Forum/answerAll";
import Footer from "./components/footer";

import { QuestionProvider } from "./components/Discussion_Forum/QuestionContext";
import { AnswerProvider } from "./components/Discussion_Forum/AnswerContext";

import AboutUs from "./components/AboutUs";
import Fests from "./components/Fests/Main";
import KashiYatra from "./components/Fests/KashiYatra";
import Technex from "./components/Fests/Technex";
import Fmc from "./components/Fests/FmcWeekend";
import Spardha from "./components/Fests/Spardha";
import DptFests from "./components/Fests/DepartmentalFests";
import Clubs from "./components/clubs";
import Academics from "./components/academics";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/fests" component={Fests} />
          <Route exact path="/fests/kashiyatra" component={KashiYatra} />
          <Route exact path="/fests/technex" component={Technex} />
          <Route exact path="/fests/fmc" component={Fmc} />
          <Route exact path="/fests/spardha" component={Spardha} />
          <Route exact path="/fests/dptfest" component={DptFests} />
          <Route exact path="/clubs" component={Clubs} />
          <Route exact path="/web-presence" component={WebPresence} />
          <Route exact path="/academics" component={Academics} />
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
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
