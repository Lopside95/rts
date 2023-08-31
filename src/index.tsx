import React from "react";
import ReactDOM from "react-dom";
// import { ChildAsFC } from "./props/Child";
import UserSearch from "./state/UserSearch";
import GuestList from "./state/GuestList";
import EventComponent from "./events/EventComponent";
const App = () => {
  return (
    <div>
      <h1>Hi</h1>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
