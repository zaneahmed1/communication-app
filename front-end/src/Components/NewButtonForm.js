import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewButtonForm() {

  const [button, setButton] = useState({
    button_category: "",
    button_label: "",
    button_message: "",
    button_image: "",
    button_naviagte: "",
  });

const addButton = (button) => {
    axios
    .post(`${API}/buttons`, button)
    .then((res) => setButton(res.value));
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
    <select name="button_category" value={button.button_category} onChange={handleTextChange}>
    <option value="Home">Home</option>
    <option value="People">People</option>
    <option value="Questions">Questions</option>
    <option value="Actions">Actions</option>
    <option value="Things">Things</option>
    <option value="Chat">Chat</option>
    <option value="Time/Date">Time/Date</option>
    </select>
    <label for="button_label">Label:</label>
    <input value={button.button_label} type="text" onChange={handleTextChange}
    />
     <label for="button_message">Message:</label>
    <input value={button.button_message} type="text" onChange={handleTextChange}
    />
     <label for="button_image">Image:</label>
    <input value={button.button_image} type="text" placeholder="https://..." onChange={handleTextChange}
    />
<button type="submit">Submit</button>
</form>
  </div>);
}
