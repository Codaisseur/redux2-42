import React, { useState } from "react";
// get the data here
// selector to get the resources here
// use selector to use it

import { useSelector, useDispatch } from "react-redux";
import { getResources } from "../store/resources/selectors";
import { addResourceAction } from "../store/resources/actions";

const ResourceSection = () => {
  const resources = useSelector(getResources);
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("library");
  const [formState, setFormState] = useState({
    name: "",
    tags: "",
    url: "",
  });

  const onFormChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    // dispatch an action
    // make a case in the reducer.
    const newResource = {
      name: formState.name,
      type: selectedType,
      url: formState.url,
      tags: formState.tags.split(/[\s,]+/),
    };
    console.log(newResource);

    dispatch(addResourceAction(newResource));
  };
  return (
    <div>
      <h1>ResourceSection!</h1>
      {resources.map(r => (
        <div>
          <h3>{r.name}</h3>
          <ul>
            {r.tags.map(tag => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      ))}

      <form onChange={onFormChange} onSubmit={onSubmit}>
        <input name='name' value={formState.name} />
        <select
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
        >
          <option value={"library"}>library</option>
          <option value={"cheatsheet"}>cheatsheet</option>
          <option value={"tool"}>tool</option>
        </select>
        <input name='tags' value={formState.tags} />
        <input name='url' value={formState.url} />
        <button type='submit'>Create!</button>
      </form>
    </div>
  );
};

export default ResourceSection;
