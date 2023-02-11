import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewButtonForm() {

  const navigate = useNavigate();

  const [button, setButton] = useState({
    button_category: "",
    button_label: "",
    button_message: "",
    button_image: "",
    button_naviagte: "",
  });

const addButton = (newButton) => {
    axios
    .post(`${API}/buttons`, newButton)
    .then(
      () => {
        navigate(`/buttons`);
      },
      (error) => console.error(error)
    )
      .catch((c) => console.warn("catch", c));
}

const handleTextChange = (event) => {
    setButton({ ...button, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addButton(button);
  };

  return( 
  <div className="newForm">
<form onSubmit={handleSubmit}>
    <label for="button_category">Category:</label>
    <select name="button_category" id="button_category">
    <option value="Home">Home</option>
    <option value="People">People</option>
    <option value="Questions">Questions</option>
    <option value="Actions">Actions</option>
    <option value="Things">Things</option>
    <option value="Chat">Chat</option>
    <option value="Time/Date">Time/Date</option>
    </select>
    <label>Label:</label>
    <input
    />

</form>
  </div>);
}
