import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import ResourceSection from "./components/ResourceSection";

import {
  getDevelopers,
  getDeveloperById,
  developersFilterFavourites,
  selectDeveloperResources,
} from "./store/developers/selectors";
import { getResources } from "./store/resources/selectors";
import { getLoggedInUser } from "./store/user/selectors";

function App() {
  const developers = useSelector(getDevelopers);
  const resources = useSelector(getResources);
  const oneDeveloper = useSelector(getDeveloperById(2));
  const [selectedResource, setSelectedResource] = useState(2);
  const [selectedDeveloper, setSelectedDevelopers] = useState(1);

  const developersWithThisFavorite = useSelector(
    developersFilterFavourites(selectedResource)
  );

  const selectedDeveloperFavorites = useSelector(
    selectDeveloperResources(selectedDeveloper)
  );

  const loggedInUser = useSelector(getLoggedInUser);

  console.log({ selectedDeveloperFavorites, loggedInUser });
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Welcome back {loggedInUser.name}!</h2>
        <h1>Web developement resources</h1>
        <h3>Developers: {developers.length}</h3>
        <h3>Resources: {resources.length}</h3>
        {/* <p>{oneDeveloper.name}</p> */}

        {/* <select
          value={selectedResource}
          onChange={e => setSelectedResource(parseInt(e.target.value))}
        >
          {resources.map(r => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
        <h3>Developers with this favourite!</h3>
        {developersWithThisFavorite.map(dev => (
          <span key={dev.id}>{dev.name}</span>
        ))}

        <select
          value={selectedDeveloper}
          onChange={e => setSelectedDevelopers(parseInt(e.target.value))}
        >
          {developers.map(dev => (
            <option value={dev.id} key={dev.id}>
              {dev.name}
            </option>
          ))}
        </select> */}
        <ResourceSection />
      </header>
    </div>
  );
}

export default App;
