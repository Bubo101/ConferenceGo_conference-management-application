import React from "react";
import Nav from './Nav'
import AttendeesList from "./AttendeesList";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";
import AttendConference from "./AttendeeForm";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }

  return (
    <React.Fragment>
    <Nav />
    <div className="container">
      {<AttendConference />}
      {/* {<ConferenceForm />} */}
      {/* <LocationForm /> */}
    {/* <AttendeesList attendees={props.attendees} /> */}
    </div>
    </React.Fragment>
  );
}

//index function sets the variable attendees which can then be used in app function 
//to return jsx , this is called a component

export default App;