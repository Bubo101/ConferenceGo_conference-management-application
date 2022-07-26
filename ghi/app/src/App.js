import React from "react";
import Nav from './Nav'
import AttendeesList from "./AttendeesList";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";
import AttendConference from "./AttendeeForm";
import PresentationForm from "./PresentationForm";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }

  return (
  <BrowserRouter>      
    <Nav />
    <div className="container">
      <Routes>
        <Route path="">
          <Route index element={<MainPage />} />
        </Route>
        <Route path="presentations">
          <Route path="new" element={<PresentationForm />} />
        </Route>
        <Route path="attendees">
          <Route path="new" element={<AttendConference />} />
        </Route> 
        <Route path="conferences">
          <Route path="new" element={<ConferenceForm />} />
        </Route> 
        <Route path="locations">
          <Route path="new" element={<LocationForm />} />
        </Route> 
        <Route path="attendees">
          <Route path="" element={<AttendeesList attendees={props.attendees} />} />
        </Route>   
      </Routes>
    </div>
  </BrowserRouter>
  );
}

//index function sets the variable attendees which can then be used in app function 
//to return jsx , this is called a component

export default App;