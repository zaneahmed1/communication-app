import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import ButtonCard from './ButtonCard';

const API = process.env.REACT_APP_API_URL;

export default function ButtonList() {

    const [buttons, setButtons] = useState([])

    useEffect(() => {
        axios
          .get(`${API}/buttons`)
          .then((response) => setButtons(response.data))
          .catch((e) => console.error("catch", e));
      }, []);
  

  return (
    <div>
        {buttons.map((button) => {
         return <ButtonCard key={button.id} button={button}/>
        })}
    </div>
  )
}
