import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

import { getDevelopers, getDeveloperById } from "./store/developers/selectors";
import { getResources } from "./store/resources/selectors";

function App() {
  const developers = useSelector(getDevelopers);
  const resources = useSelector(getResources);
  const oneDeveloper = useSelector(getDeveloperById(2));

  console.log({ developers, resources, oneDeveloper });
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Web developement resources</h1>
        <h3>Developers: {developers.length}</h3>
        <h3>Resources: {resources.length}</h3>
        <p>{oneDeveloper.name}</p>
      </header>
    </div>
  );
}

export default App;
