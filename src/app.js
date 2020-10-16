import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./components/pages/home";
import RegistrationGuide from "./components/pages/registration-guide";

import DiscussionForum from "./components/pages/discussion-forum";
import AnswerAll from "./components/DiscussionForum/answer-all";
import { QuestionProvider } from "./components/DiscussionForum/QuestionContext";
import { AnswerProvider } from "./components/DiscussionForum/AnswerContext";

import Gymkhana from "./components/pages/gymkhana";
import Academics from "./components/pages/academics";

import Fests from "./components/pages/fests";
import KashiYatra from "./components/Fests/kashiyatra";
import Technex from "./components/Fests/technex";
import FMCWeekend from "./components/Fests/fmc-weekend";
import Spardha from "./components/Fests/spardha";
import DeptFests from "./components/Fests/dept-fests";

import Gallery from './components/pages/gallery';
import PlacementStats from "./components/pages/placement-stats";
import WebPresence from "./components/pages/web-presence";
import MiscellanousGuide from "./components/pages/miscellanous-guide";

import ExploreVns from "./components/pages/explore-vns";

import AboutUs from "./components/pages/about-us";
import Feedback from "./components/pages/feedback";
import TnC from './components/pages/TnC';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <div className="body-container-full">
              <Route exact path="/" component={Home} />
              <Route exact path="/academics" component={Academics} />
              <Route exact path="/gymkhana" component={Gymkhana} />
          </div>
          <div className="body-container">
            <Route exact path="/registration-guide" component={RegistrationGuide}/>

            <Route exact path="/fests" component={Fests} />
            <Route exact path="/fests/kashiyatra" component={KashiYatra} />
            <Route exact path="/fests/technex" component={Technex} />
            <Route exact path="/fests/fmc-weekend" component={FMCWeekend} />
            <Route exact path="/fests/spardha" component={Spardha} />
            <Route exact path="/fests/dept-fest" component={DeptFests} />

            <Route excat path="/gallery" component={Gallery} />
            <Route excat path="/placement-stats" component={PlacementStats} />
            <Route exact path="/web-presence" component={WebPresence} />
            <Route exact path="/miscellanous-guide" component={MiscellanousGuide} />

            <Route excat path="/explore-vns" component={ExploreVns} />

            <Route exact path="/about-us" component={AboutUs} />
            <Route excat path="/feedback" component={Feedback} />
            <Route excat path="/tnc" component={TnC} />
          
            <QuestionProvider>
              <AnswerProvider>
                <Route exact path="/discussion-forum" component={DiscussionForum} />
                <Route exact path="/discussion-forum/:ques_id/answers" component={AnswerAll}/>
              </AnswerProvider>
            </QuestionProvider>
          </div>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
